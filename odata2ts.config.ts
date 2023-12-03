import {ConfigFileOptions,EmitModes,Modes} from '@odata2ts/odata2ts';

const config:ConfigFileOptions={
    services:{
        role:{
            sourceUrl:'http://horizon.api.auth.technomax.com.np/api/auth/role', //Url of api
            source:'resource/role.xml', //locator of xml file
            output:'src/app/models',
            mode:Modes.models,
            emitMode:EmitModes.ts
        }

    }
}

export default config;