export function patchRoutes(routes) {
  ((window.g_umi && window.g_umi.monorepo) || []).forEach(repo => {
    repo.routes.forEach(route => {
      // add routes under first layout
      routes[1].routes.unshift(route);
    });
    (repo.models || []).forEach(model => {
      window.g_app.model(model);
    });
  });
  window.g_routes = routes;
}

export function render(oldRender) {
  oldRender();
}
