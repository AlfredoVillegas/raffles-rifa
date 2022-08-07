import{_ as b,s as c,b as x,o as l,c as a,a as e,d as k,t as u,w as f,v as m,e as w,F as h,i as g,f as y,g as v,n as _,h as T}from"./index.a90d2cb1.js";const I={data(){return{store:c,rifa:{id:null},filas:1,mapTicketsNumber:new Map,title:"",elegirIsActive:!1,newTicketsSold:{competitorName:"",competitorPhone:"",number:null,raffleId:null}}},created(){this.getRaffle()},mounted(){this.getTicketsVendidos()},computed:{filas2(){return 40}},methods:{elegir(s){if(this.mapTicketsNumber.has(s))return alert("Numero No disponible");this.newTicketsSold.number=s,this.elegirIsActive=!0},newTicketsSoldPost(s){this.axios.post("tickets",s,{headers:{Authorization:`Bearer ${this.store.user.accessToken}`}}).then(t=>{const r=t.data.data;this.elegirIsActive=!1,this.mapTicketsNumber.set(r.number,r),this.newTicketsSold={raffleId:this.rifa.id}}).catch(t=>{const r=t.response.data.error.errors.nombre.message;console.log(r),alert("error:",r)})},numberCurrent(s,t){return s*10-10+t-1},getRaffle(){const s=c.rifas.findIndex(r=>r.id===Number(this.$route.params.raffleId));if(s!==-1){this.rifa=c.rifas[s],this.filas=Math.ceil(this.rifa.totalTickets/10),this.newTicketsSold.raffleId=this.rifa.id;return}this.axios.get(`raffles/${this.$route.params.raffleId}`).then(r=>{this.rifa=r.data.data,this.filas=Math.ceil(this.rifa.totalTickets/10),this.newTicketsSold.raffleId=this.rifa.id}).catch(r=>{alert("error"+r.message),console.log("error"+r)})},getTicketsVendidos(){this.axios.get(`tickets/${this.$route.params.raffleId}`,{headers:{Authorization:`Bearer ${this.store.user.accessToken}`}}).then(s=>{s.data.data.forEach(r=>{this.mapTicketsNumber.set(r.number,r)})}).catch(s=>{alert("error"+s.message),console.log("error"+s)})}}},S={class:"flex px-2 rounded-t-xl items-center min-h-screen from-red-100 via-red-300 to-red-500 bg-gradient-to-br flex-col"},N={class:"w-full max-w-lg p-6 mx-auto my-12 bg-white rounded-2xl shadow-xl flex flex-col"},C={key:0,class:"mb-6"},V=e("h3",{class:"text-center my-2"},"Agregar participante",-1),A={class:"m-2 text-center font-semibold"},L=e("button",{class:"text-center py-2 px-4 w-full font-medium text-white bg-green-600 rounded-lg border border-gray-200 cursor-pointer focus:outline-none hover:bg-gray-300",type:"submit"}," Agregar ",-1),M={class:"flex justify-between pb-4"},B=e("div",{class:"-rotate-90 cursor-pointer"},[e("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11.001 6L6.00098 1L1.00098 6",stroke:"black","stroke-opacity":"0.4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),j={class:"uppercase text-sm font-semibold text-gray-600"},P=e("div",{class:"rotate-90 cursor-pointer"},[e("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11.001 6L6.00098 1L1.00098 6",stroke:"black","stroke-opacity":"0.4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),R=e("div",{class:"flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t"},null,-1),E=["onClick"],z=T(" Link Publico ");function F(s,t,r,D,o,n){const p=x("RouterLink");return l(),a("div",S,[e("div",N,[o.elegirIsActive?(l(),a("div",C,[e("form",{onSubmit:t[3]||(t[3]=k(i=>n.newTicketsSoldPost(o.newTicketsSold),["prevent"])),class:"w-full text-sm p-2 font-medium text-gray-900 bg-white border-green-400 rounded-lg border"},[V,e("h3",A," Numero "+u(o.newTicketsSold.number),1),f(e("input",{type:"text",placeholder:"Ingrese el nombre",class:"my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2","onUpdate:modelValue":t[0]||(t[0]=i=>o.newTicketsSold.competitorName=i)},null,512),[[m,o.newTicketsSold.competitorName]]),f(e("input",{type:"text",placeholder:"numero de telefono",class:"my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2","onUpdate:modelValue":t[1]||(t[1]=i=>o.newTicketsSold.competitorPhone=i)},null,512),[[m,o.newTicketsSold.competitorPhone]]),L,e("button",{class:"text-center py-2 my-1 px-4 w-full font-medium text-white bg-gray-400 rounded-lg border border-gray-200 cursor-pointer focus:outline-none hover:bg-gray-300",onClick:t[2]||(t[2]=i=>o.elegirIsActive=!1)}," Cancelar ")],32)])):w("",!0),e("div",M,[B,e("span",j,u(o.rifa.name),1),P]),R,(l(!0),a(h,null,g(o.filas,i=>(l(),a("div",{key:i,class:"flex justify-between font-medium text-sm pb-2"},[(l(),a(h,null,g(10,d=>e("span",{key:n.numberCurrent(i,d),class:_(["mx-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer font-medium",{"text-gray-400 hover:border-gray-500 hover:text-gray-500":o.mapTicketsNumber.has(n.numberCurrent(i,d))}]),onClick:U=>n.elegir(n.numberCurrent(i,d))},u(n.numberCurrent(i,d)),11,E)),64))]))),128))]),y(p,{class:"font-medium text-base px-4 w-full text-green-800 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-300",to:{path:`/raffles/public/${o.rifa.id}`}},{default:v(()=>[z]),_:1},8,["to"])])}const G=b(I,[["render",F]]);export{G as default};