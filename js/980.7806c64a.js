"use strict";(self["webpackChunkquasar_project"]=self["webpackChunkquasar_project"]||[]).push([[980],{9980:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var a=l(9835),o=l(6970);const s=(0,a._)("h1",null,"POSTS",-1),i={class:"q-ml-sm"};function n(e,t,l,n,p,u){const r=(0,a.up)("q-item-label"),d=(0,a.up)("q-item-section"),c=(0,a.up)("q-item"),m=(0,a.up)("q-list"),w=(0,a.up)("q-avatar"),f=(0,a.up)("q-card-section"),g=(0,a.up)("q-btn"),_=(0,a.up)("q-card-actions"),q=(0,a.up)("q-card"),Z=(0,a.up)("q-dialog"),h=(0,a.up)("q-page"),Q=(0,a.Q2)("ripple"),k=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(h,{class:"flex flex-center"},{default:(0,a.w5)((()=>[s,(0,a.Wm)(m,{bordered:"",separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.posts,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{clickable:"",key:t.id,onClick:l=>e.openPost(t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{overline:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.title),1)])),_:2},1024),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.body),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[Q]]))),128))])),_:1}),e.post?((0,a.wg)(),(0,a.j4)(Z,{key:0,modelValue:e.dialog,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dialog=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),(0,a._)("span",i,(0,o.zw)(e.post.title),1)])),_:1}),(0,a.Wm)(_,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{flat:"",label:"Close",color:"primary"},null,512),[[k]])])),_:1})])),_:1})])),_:1},8,["modelValue"])):(0,a.kq)("",!0)])),_:1})}const p=(0,a.aZ)({name:"IndexPage",data(){return{posts:[],dialog:!1,post:null}},created(){this.$axios.get("https://jsonplaceholder.typicode.com/posts").then((e=>{this.posts=e.data}))},methods:{openPost(e){this.post=e,this.dialog=!0}}});var u=l(1639),r=l(9885),d=l(3246),c=l(490),m=l(1233),w=l(3115),f=l(2074),g=l(4458),_=l(3190),q=l(1357),Z=l(1821),h=l(4455),Q=l(1136),k=l(2146),b=l(9984),C=l.n(b);const W=(0,u.Z)(p,[["render",n]]),y=W;C()(p,"components",{QPage:r.Z,QList:d.Z,QItem:c.Z,QItemSection:m.Z,QItemLabel:w.Z,QDialog:f.Z,QCard:g.Z,QCardSection:_.Z,QAvatar:q.Z,QCardActions:Z.Z,QBtn:h.Z}),C()(p,"directives",{Ripple:Q.Z,ClosePopup:k.Z})}}]);