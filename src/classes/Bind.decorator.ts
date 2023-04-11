export function bind(target: any, name:string, desc: PropertyDescriptor) : PropertyDescriptor {
    return{
        get(){
            return desc.value.bind(this)
        }
    }
}