db.createCollection('Gafas', {validator: {$jsonSchema: {bsonType: 'object',title: 'Gafas',required: ['IdGafas','Brand','Montura','Proveedor','Precio','Compra'],properties:{IdGafas:{bsonType: 'objectId'},Brand:{bsonType: 'string'},Montura:{enum: },Proveedor:{bsonType: 'object',title: 'object',required: ['IdProveedor','Nombre','Direccion','Tel','Fax','NIF'],properties:{IdProveedor:{bsonType: 'objectId'},Nombre:{bsonType: 'string'},Direccion:{bsonType: 'object',title: 'object',required: ['Calle','Numero','CP','Ciudad'],properties:{Calle:{bsonType: 'string'},Numero:{bsonType: 'string'},Planta:{bsonType: 'string'},Puerta:{bsonType: 'string'},CP:{bsonType: 'string'},Ciudad:{bsonType: 'string'}}},Tel:{bsonType: 'string'},Fax:{bsonType: 'string'},NIF:{bsonType: 'string'}}},Precio:{bsonType: 'decimal'},Compra:{bsonType: 'object',title: 'object',required: ['Cliente','Compra'],properties:{Cliente:{bsonType: 'object',title: 'object',required: ['IdCliente','Direccion','Telfono','Email','FechaRegistro'],properties:{IdCliente:{bsonType: 'objectId'},Direccion:{bsonType: 'object',title: 'object',required: ['Calle','Numero','Planta','Numero','CP','Ciudad','Pais'],properties:{Calle:{bsonType: 'string'},Numero:{bsonType: 'string'},Planta:{bsonType: 'string'},Numero:{bsonType: 'string'},CP:{bsonType: 'string'},Ciudad:{bsonType: 'string'},Pais:{bsonType: 'string'}}},Telfono:{bsonType: 'string'},Email:{bsonType: 'string'},FechaRegistro:{bsonType: 'timestamp'}}},Compra:{bsonType: 'objectId'}}}}}}});