
import napcap from './../../napcap/dist/napcap';

const api = napcap.api();

api.addResource(napcap.resource("/admin/auth/user"), "user");
api.addResource(napcap.resource("/admin/tag"), "tag");
api.addResource(napcap.resource("/admin/category"), "category");
api.addResource(napcap.resource("/admin/series"), "series");
api.addResource(napcap.resource("/admin/article"), "article");
api.addRoute(napcap.route("/admin/dt/article"), "dt.article", 'index');

export default api;
