const AppLayout = () => import('/imports/view/AppLayout.vue');
new Vue({
  render: v => v(AppLayout),
}).$mount('#app');