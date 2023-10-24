import {ConfigFileOptions,EmitModes,Modes} from '@odata2ts/odata2ts';

const config:ConfigFileOptions={
    services:{
        cib:{
            sourceUrl:'', //Url of api
            source:'resources/cib.xml', //locator of xml file
            output:'src/app/models',
            mode:Modes.models,
            emitMode:EmitModes.ts
        }

    }
}

export default config;