import{_ as m,o as l,c as d,d as p,w as a,v as n,a as o,e as f}from"./index.a90d2cb1.js";const g={data(){return{rifas:[],rifa:{},agregar:!0}},methods:{agregarRifa(i){this.axios.post("raffles",i).then(e=>{const s=e.data.data;this.rifas.unshift(s)}).catch(e=>{const s=e.response.data.error.errors.nombre.message;console.log(s),alert("error:",s)}),this.rifa={}}}},c={key:0},x=o("h3",{class:"text-center my-2"},"Agregar nueva Rifa",-1),y=o("button",{class:"text-center py-2 px-4 w-full font-medium text-white bg-green-600 rounded-b-lg border border-gray-200 cursor-pointer focus:outline-none hover:bg-gray-300",type:"submit"}," Agregar ",-1);function b(i,e,s,h,r,u){return r.agregar?(l(),d("div",c,[r.agregar?(l(),d("form",{key:0,onSubmit:e[4]||(e[4]=p(t=>u.agregarRifa(r.rifa),["prevent"])),class:"w-60 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200"},[x,a(o("input",{type:"text",placeholder:"Ingrese un Nombre",class:"my-1 mx-2","onUpdate:modelValue":e[0]||(e[0]=t=>r.rifa.name=t)},null,512),[[n,r.rifa.name]]),a(o("input",{type:"text",placeholder:"Ingrese una descripcion",class:"my-1 mx-2","onUpdate:modelValue":e[1]||(e[1]=t=>r.rifa.description=t)},null,512),[[n,r.rifa.description]]),a(o("input",{type:"text",placeholder:"Fecha de finalizacion: 01-12-2020",class:"my-1 mx-2","onUpdate:modelValue":e[2]||(e[2]=t=>r.rifa.drawDate=t)},null,512),[[n,r.rifa.drawDate]]),a(o("input",{type:"text",placeholder:"ingrese cantidad de tickets",class:"my-1 mx-2","onUpdate:modelValue":e[3]||(e[3]=t=>r.rifa.totalTickets=t)},null,512),[[n,r.rifa.totalTickets]]),y],32)):f("",!0)])):f("",!0)}const v=m(g,[["render",b]]);export{v as default};