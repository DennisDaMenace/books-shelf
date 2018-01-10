// NOTE: these routes will work just fine running locally
// But when you start remotely check out routes-remote.js


// all route changes should hide page containers
page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', app.thingListPage.init)
page('/admin', app.adminPage.init)
page('/create', app.createPage.init)
page('/edit/:id', (ctx) => app.Thing.fetchOne(ctx.params.id).then(app.editPage.init))

page('/book-detail-page/:id', app.bookDetailPage.init)
page.start()