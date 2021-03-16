(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{142:function(e,t,r){"use strict";var n=r(0),a=r.n(n),s=r(139),i=r(148);r(140),r(55);t.a=function(e){var t=a.a.useState(!1),r=t[0],n=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!r)}})))),r&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(s.a,{components:i.a},e.children)))}},143:function(e,t,r){"use strict";var n=r(0),a=r(144);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},144:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},145:function(e,t,r){"use strict";var n=r(0),a=r.n(n),s=r(143),i=r(141),c=r(56),l=r.n(c),o=37,d=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,u=e.groupId,b=e.className,m=Object(s.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(n.useState)(c),j=O[0],f=O[1],v=n.Children.toArray(e.children);if(null!=u){var k=h[u];null!=k&&k!==j&&p.some((function(e){return e.value===k}))&&f(k)}var E=function(e){f(e),null!=u&&g(u,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case d:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},r)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},146:function(e,t,r){"use strict";var n=r(3),a=r(0),s=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}},239:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/re_kubernetes-b0e5aa2c9a819bfb6d0bd9fa6898ab51.png"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),s=(r(0),r(139)),i=(r(145),r(146),r(140),r(142),{id:"index-kubernetes",title:"Create Database using Google Kubernetes Engine",sidebar_label:"Kubernetes",slug:"/create/kubernetes/"}),c={unversionedId:"create/kubernetes/index-kubernetes",id:"create/kubernetes/index-kubernetes",isDocsHomePage:!1,title:"Create Database using Google Kubernetes Engine",description:"Step 1. Pre-requisite",source:"@site/docs/create/kubernetes/index-kubernetes.mdx",slug:"/create/kubernetes/",permalink:"/create/kubernetes/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/kubernetes/index-kubernetes.mdx",version:"current",sidebar_label:"Kubernetes",sidebar:"docs",previous:{title:"Create Database from Source Code",permalink:"/create/from-source/"},next:{title:"Java and Redis",permalink:"/develop/java/"}},l=[{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite",children:[]},{value:"Step 2. Ensure that gcloud is installed on your local Linux system:",id:"step-2-ensure-that-gcloud-is-installed-on-your-local-linux-system",children:[]},{value:"Step 3. Create a 5 Node GKE cluster:",id:"step-3-create-a-5-node-gke-cluster",children:[]},{value:"Step 4. Create a new namespace",id:"step-4-create-a-new-namespace",children:[]},{value:"Step 5. Switch context to the newly created namespace",id:"step-5-switch-context-to-the-newly-created-namespace",children:[]},{value:"Step 6. Deploy the operator bundle",id:"step-6-deploy-the-operator-bundle",children:[]},{value:"Step 7. Listing the deployment:",id:"step-7-listing-the-deployment",children:[]},{value:"Step 8. Create a Redis Enterprise Cluster",id:"step-8-create-a-redis-enterprise-cluster",children:[]},{value:"Step 9. Listing the RedisEnterpriseCluster",id:"step-9-listing-the-redisenterprisecluster",children:[]},{value:"Step 10. Listing kubernetes resources",id:"step-10-listing-kubernetes-resources",children:[]},{value:"Step 11.  Listing the secrets",id:"step-11--listing-the-secrets",children:[]},{value:"Step 12. Listing the password",id:"step-12-listing-the-password",children:[]},{value:"Step 13. Creating a database",id:"step-13-creating-a-database",children:[]},{value:"Next Step",id:"next-step",children:[]}],o={toc:l};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"step-1-pre-requisite"},"Step 1. Pre-requisite"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A Linux system"),Object(s.b)("li",{parentName:"ul"},"curl, git, kubectl packages installed"),Object(s.b)("li",{parentName:"ul"},"A google account with Kubernetes Engine Admin role."),Object(s.b)("li",{parentName:"ul"},"Install the latest cloud SDK from ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/quickstart#installing_the_latest_version"}),"Installing the latest Cloud SDK version (313.0.1)")),Object(s.b)("li",{parentName:"ul"},"Initializing the cloud SDK by ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/quickstart#initializing_the"}),"gcloud init")," link")),Object(s.b)("h3",{id:"step-2-ensure-that-gcloud-is-installed-on-your-local-linux-system"},"Step 2. Ensure that gcloud is installed on your local Linux system:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ gcloud -v\nGoogle Cloud SDK 320.0.0\nalpha 2020.12.04\napp-engine-go 1.9.71\napp-engine-java 1.9.84\napp-engine-python 1.9.91\napp-engine-python-extras 1.9.91\n")),Object(s.b)("h3",{id:"step-3-create-a-5-node-gke-cluster"},"Step 3. Create a 5 Node GKE cluster:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ gcloud container clusters create testredis  --subnetwork default --num-nodes 5 --machine-type e2-standard-8 --enable-basic-auth --region us-east1\n")),Object(s.b)("h3",{id:"step-4-create-a-new-namespace"},"Step 4. Create a new namespace"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"[node1 kubelabs]$ kubectl create namespace demo\nnamespace/demo created\n")),Object(s.b)("h3",{id:"step-5-switch-context-to-the-newly-created-namespace"},"Step 5. Switch context to the newly created namespace"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'$ kubectl config set-context --current --namespace=demo\nContext "kubernetes-admin@kubernetes" modified.\n')),Object(s.b)("h3",{id:"step-6-deploy-the-operator-bundle"},"Step 6. Deploy the operator bundle"),Object(s.b)("p",null,"To deploy the default installation with kubectl, the following command will deploy a bundle of all the yaml declarations required for the operator. You can download the bndle YAML file via ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/RedisLabs/redis-enterprise-k8s-docs/master/bundle.yaml"}),"this")," link: "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ kubectl apply -f bundle.yaml\nrole.rbac.authorization.k8s.io/redis-enterprise-operator created\nrolebinding.rbac.authorization.k8s.io/redis-enterprise-operator created\nserviceaccount/redis-enterprise-operator created\ncustomresourcedefinition.apiextensions.k8s.io/redisenterpriseclusters.app.redislabs.com created\ndeployment.apps/redis-enterprise-operator created\ncustomresourcedefinition.apiextensions.k8s.io/redisenterprisedatabases.app.redislabs.com created\n")),Object(s.b)("h3",{id:"step-7-listing-the-deployment"},"Step 7. Listing the deployment:"),Object(s.b)("p",null,"Run the below command to verify redis-enterprise-operator deployment is running."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get deployment\nNAME                               READY   UP-TO-DATE   AVAILABLE   AGE\nredis-enterprise-operator          1/1     1            1           9m34s\n")),Object(s.b)("h3",{id:"step-8-create-a-redis-enterprise-cluster"},"Step 8. Create a Redis Enterprise Cluster"),Object(s.b)("p",null,"Create a RedisEnterpriseCluster(REC) using the default configuration, which is suitable for development type deployments and works in typical scenarios:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ kubectl apply -f crds/app_v1_redisenterprisecluster_cr.yaml\n\nredisenterprisecluster.app.redislabs.com/redis-enterprise created\n")),Object(s.b)("h3",{id:"step-9-listing-the-redisenterprisecluster"},"Step 9. Listing the RedisEnterpriseCluster"),Object(s.b)("p",null,"The rec is a shortcut for RedisEnterpriseCluster. The cluster takes around 5-10 minutes to come up.Run the below command to list the RedisEnterpriseCluster: "),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ kubectl get rec\nNAME               AGE\nredis-enterprise   14s\n[node1 redis-enterprise-k8s-docs]$\n")),Object(s.b)("h3",{id:"step-10-listing-kubernetes-resources"},"Step 10. Listing kubernetes resources"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ kubectl get po,svc,deploy\nNAME                                                    READY   STATUS    RESTARTS   AGE\npod/redis-enterprise-0                                  2/2     Running   0          6m42s\npod/redis-enterprise-1                                  2/2     Running   0          4m34s\npod/redis-enterprise-2                                  2/2     Running   0          2m18s\npod/redis-enterprise-operator-58f8566fd7-5kcvz          1/1     Running   0          69m\npod/redis-enterprise-services-rigger-5849b86c65-lwql9   1/1     Running   0          6m42s\nNAME                          TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE\nservice/kubernetes            ClusterIP      10.3.240.1     <none>          443/TCP                      71m\nservice/redis-enterprise      ClusterIP      None           <none>          9443/TCP,8001/TCP,8070/TCP   6m42s\nservice/redis-enterprise-ui   LoadBalancer   10.3.246.252   35.196.117.24   8443:31473/TCP               6m42s\nNAME                                               READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/redis-enterprise-operator          1/1     1            1           69m\ndeployment.apps/redis-enterprise-services-rigger   1/1     1            1           6m44s\n")),Object(s.b)("p",null,"You can verify the Pods and list of services over Google Cloud Dashboard UI:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"Redis Enterprise UI",src:r(239).default})),Object(s.b)("h3",{id:"step-11--listing-the-secrets"},"Step 11.  Listing the secrets"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get secrets redis-enterprise -o yaml | grep password | awk '{print $2}'\nbXVLeHRpblY=\n")),Object(s.b)("h3",{id:"step-12-listing-the-password"},"Step 12. Listing the password"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"echo bXVLeHRpblY= | base64 -d\n")),Object(s.b)("h3",{id:"step-13-creating-a-database"},"Step 13. Creating a database"),Object(s.b)("p",null,'Open  https://localhost:8443 on the browser to see the Redis Enterprise Software web console. Click on "Setup", add your preferred DNS and admin credentials and proceed further to create your first Redis database using Redis Enterprise.'),Object(s.b)("h2",{id:"next-step"},"Next Step"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/platforms/kubernetes/concepts/architecture/"}),"Redis Labs Kubernetes Architecture")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/platforms/kubernetes/concepts/operator/"}),"Redis Enterprise Kubernetes Operator-based Architecture")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/platforms/kubernetes/concepts/sizing-on-kubernetes/"}),"Sizing and Scaling a Redis Enterprise Cluster Deployment on Kubernetes"))))}d.isMDXComponent=!0}}]);