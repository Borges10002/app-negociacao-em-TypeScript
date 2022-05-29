export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metadoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        let retorno = metadoOriginal.apply(this, args);
        if(typeof retorno === 'string'){
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}