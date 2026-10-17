const adminText={
ar:{home:"العودة للموقع",overview:"نظرة عامة",applications:"الطلبات",members:"الأعضاء",ranks:"الرتب",tasks:"المهام",settings:"الإعدادات",title:"لوحة الإدارة",subtitle:"إدارة الطلبات والأعضاء والرتب والمهام من مكان واحد.",badge:"وضع العرض التجريبي",alert:"هذه لوحة واجهة تجريبية. الإدارة الحقيقية عبر الأجهزة تحتاج إعداد Supabase وتسجيل دخول موثّق.",pending:"الطلبات المعلقة",accepted:"الأعضاء المقبولون",rejected:"المرفوضة",activeTasks:"المهام النشطة",pendingHint:"بانتظار المراجعة",acceptedHint:"قائمة الأعضاء",rejectedHint:"قرارات الإدارة",tasksHint:"توزيع المهام",recent:"آخر الطلبات",refresh:"تحديث",empty:"لا توجد طلبات متصلة",emptyText:"عند إعداد قاعدة البيانات، ستظهر الطلبات الجديدة هنا للمراجعة واتخاذ القرار.",test:"فتح استمارة التقديم ↗",quick:"إجراءات سريعة",quickApps:"مراجعة الطلبات",quickMembers:"إدارة الأعضاء",quickRanks:"تعديل الرتب",quickTasks:"توزيع المهام",notReady:"هذا القسم يحتاج ربط قاعدة البيانات وتسجيل دخول إداري حقيقي.",back:"العودة للموقع"},
en:{home:"Back to site",overview:"Overview",applications:"Applications",members:"Members",ranks:"Ranks",tasks:"Tasks",settings:"Settings",title:"Admin Dashboard",subtitle:"Manage applications, members, ranks, and tasks from one place.",badge:"Demo preview",alert:"This is a frontend preview. Real cross-device administration requires Supabase and authenticated admin access.",pending:"Pending applications",accepted:"Accepted members",rejected:"Rejected",activeTasks:"Active tasks",pendingHint:"Awaiting review",acceptedHint:"Member directory",rejectedHint:"Staff decisions",tasksHint:"Task assignment",recent:"Recent applications",refresh:"Refresh",empty:"No connected applications",emptyText:"After the database is configured, new applications will appear here for review and decisions.",test:"Open application form ↗",quick:"Quick actions",quickApps:"Review applications",quickMembers:"Manage members",quickRanks:"Edit ranks",quickTasks:"Assign tasks",notReady:"This section needs database integration and real admin authentication.",back:"Back to site"},
es:{home:"Volver al sitio",overview:"Resumen",applications:"Solicitudes",members:"Miembros",ranks:"Rangos",tasks:"Tareas",settings:"Ajustes",title:"Panel de administración",subtitle:"Gestiona solicitudes, miembros, rangos y tareas desde un solo lugar.",badge:"Vista de demostración",alert:"Esta es una vista previa. La administración entre dispositivos requiere Supabase y acceso administrativo autenticado.",pending:"Solicitudes pendientes",accepted:"Miembros aceptados",rejected:"Rechazadas",activeTasks:"Tareas activas",pendingHint:"Pendientes de revisión",acceptedHint:"Lista de miembros",rejectedHint:"Decisiones del equipo",tasksHint:"Asignación de tareas",recent:"Solicitudes recientes",refresh:"Actualizar",empty:"No hay solicitudes conectadas",emptyText:"Al configurar la base de datos, las nuevas solicitudes aparecerán aquí para su revisión.",test:"Abrir formulario ↗",quick:"Acciones rápidas",quickApps:"Revisar solicitudes",quickMembers:"Gestionar miembros",quickRanks:"Editar rangos",quickTasks:"Asignar tareas",notReady:"Esta sección necesita integración de base de datos y autenticación real.",back:"Volver al sitio"}
};
let lang="ar";const $=s=>document.querySelector(s);
function setAdminLang(l){lang=adminText[l]?l:"ar";const t=adminText[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";$("#adminLanguage").value=lang;$("#backHome").textContent=t.back;document.querySelectorAll("[data-admin]").forEach(e=>e.textContent=t[e.dataset.admin]||e.textContent);$("#dashTitle").textContent=t.title;$("#dashSubtitle").textContent=t.subtitle;$("#demoBadge").textContent=t.badge;$("#adminAlert").textContent=t.alert;$("#labelPending").textContent=t.pending;$("#labelAccepted").textContent=t.accepted;$("#labelRejected").textContent=t.rejected;$("#labelTasks").textContent=t.activeTasks;$("#statPendingHint").textContent=t.pendingHint;$("#statAcceptedHint").textContent=t.acceptedHint;$("#statRejectedHint").textContent=t.rejectedHint;$("#statTasksHint").textContent=t.tasksHint;$("#panelTitle").textContent=t.recent;$("#refreshText").textContent=t.refresh;$("#emptyTitle").textContent=t.empty;$("#emptyText").textContent=t.emptyText;$("#testApply").textContent=t.test;$("#quickTitle").textContent=t.quick;$("#quickApps").textContent=t.quickApps;$("#quickMembers").textContent=t.quickMembers;$("#quickRanks").textContent=t.quickRanks;$("#quickTasks").textContent=t.quickTasks;}
$("#adminLanguage").addEventListener("change",e=>setAdminLang(e.target.value));
document.querySelectorAll("[data-panel]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-panel]").forEach(x=>x.classList.remove("active"));b.classList.add("active");const t=adminText[lang];$("#panelTitle").textContent=({overview:t.recent,applications:t.applications,members:t.members,ranks:t.ranks,tasks:t.tasks,settings:t.settings})[b.dataset.panel]||t.recent;$("#emptyTitle").textContent=t.notReady;$("#emptyText").textContent=t.alert;$("#testApply").style.display=b.dataset.panel==="overview"||b.dataset.panel==="applications"?"inline-flex":"none";}));
$("#refreshDemo").addEventListener("click",()=>{const t=adminText[lang];$("#emptyText").textContent=t.alert;});
setAdminLang("ar");
// Hidden admin gate for casual access only. Real security must be enforced by a backend.
const ADMIN_ACCESS_CODE="1937";
$("#gateForm").addEventListener("submit",e=>{
 e.preventDefault();
 const code=$("#adminCode").value;
 if(code===ADMIN_ACCESS_CODE){
   $("#adminGate").hidden=true;
   $("#adminDashboard").hidden=false;
   $("#adminCode").value="";
   $("#adminError");
 }else{
   $("#gateError").textContent=lang==="en"?"Incorrect access code.":lang==="es"?"Código incorrecto.":"رمز الدخول غير صحيح.";
   $("#adminCode").value="";
   $("#adminCode").focus();
 }
});
$("#adminLanguage").addEventListener("change",()=>{
 const langNow=$("#adminLanguage").value;
 $("#gateTitle").textContent=langNow==="en"?"Admin Area":langNow==="es"?"Área de administración":"منطقة الإدارة";
 $("#gateDesc").textContent=langNow==="en"?"Enter the access code to continue":langNow==="es"?"Introduce el código de acceso":"أدخل رمز الوصول للمتابعة";
 $("#gateSubmit").textContent=langNow==="en"?"Secure Login ↗":langNow==="es"?"Acceso seguro ↗":"دخول آمن ↗";
 $("#gateBack").textContent=langNow==="en"?"Back to home":langNow==="es"?"Volver al inicio":"العودة للرئيسية";
});
