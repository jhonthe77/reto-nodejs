import {Schema ,model,} from 'mongoose';
const  user =new Schema( {
     documento:{type:String ,require:true},
     name: {type:String ,require:true},
     apellido:{type:String ,require:true},
     direccion:{type:String ,require:true},
     corre:{type:String ,require:true},
     telefono_fijo:{type:String ,require:true},
     tipo_de_documento:{type:String ,require:true},
     telefono_celular:{type:String ,require:true},
     link:{type:String ,require:true},
     estudinate:{type:String ,require:true},
     estrato:{type:String ,require:true},
     tipo_colegio:{type:String ,require:true}
    },{
        timestamps:true,
    });

    const MyModel = model('persona', user);

    export default MyModel

