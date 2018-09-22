const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('user.new', '/new', async (ctx) => {
  const user = ctx.orm.user.build();
  await ctx.render('user/new', {
    debug_string: "",
    user,
    submitUserPath: ctx.router.url('user.create'),
  });
});

router.get('user.edit', '/:id/edit', async (ctx) => {
  ctx.state.user = await ctx.orm.user.findById(ctx.params.id);
  const { user } = ctx.state;
  await ctx.render('user/new', {
    debug_string:"",
    user,
    submitUserPath: ctx.router.url('user.update', { id: user.id }),
  });
});

router.get('user', '/:id', async (ctx) => {
  const user = await ctx.orm.user.findById(ctx.params.id);

  await ctx.render('user/show', {
    user,
    //editUserPath: user => ctx.router.url('user.edit', { id: user.id }),
    //deleteUserPath: user => ctx.router.url('user.delete', { id: user.id }),
  });
});

router.post('user.create', '/', async (ctx) => {
  const user = ctx.orm.user.build(ctx.request.body);
  console.log(ctx.request.body);
  await user.save({ fields: ['name', 'picture_link', 'email', 'password', 'university'] });
  ctx.redirect(ctx.router.url('user', {id: user.id}));
});

router.patch('user.update', '/:id', async (ctx) => {
  const user = await ctx.orm.user.findById(ctx.params.id);

  const past_id = user.id;
  try {
    var { name, email, logo} = ctx.request.body.fields;

    await user.update({ name, email, logo});
    ctx.redirect(ctx.router.url('user', { id: past_id }));

  } catch (validationError) {

    await ctx.render('user/edit', {
      debug_string:validationError,
      user,
      errors: validationError.errors,
      submitUserPath: ctx.router.url('user.update', { id: past_id }),
    });
  }
});

router.del('user.delete', '/:id', async (ctx) => {
  ctx.state.user = await ctx.orm.user.findById(ctx.params.id);
  const { user } = ctx.state;
  await user.destroy();

  ctx.redirect(ctx.router.url('home'));

});

module.exports = router;
