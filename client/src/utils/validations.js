const validationInputs = (input) => {
    const errors = {};

    if(!input.name) errors.name = "¡debe diligenciar este campo!"
    if(!/^[^0-9]*$/.test(input.name)) errors.name = "¡el nombre no debe contener números!"

    if(!/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(input.image)) errors.image = "¡URL ingresada no es válida!"
    if(!input.image) errors.image = "¡debe diligenciar este campo!"
    
    if(input.hp < 1 || input.hp > 300) errors.hp = "¡debe tener un valor entre 1 y 300!"
    if(!input.hp) errors.hp = "¡debe diligenciar este campo!"
    
    if(input.attack < 1 || input.attack > 300) errors.attack = "¡debe tener un valor entre 1 y 300!"
    if(!input.attack) errors.attack = "¡debe diligenciar este campo!"

    if(input.defense < 1 || input.defense > 300) errors.defense = "¡debe tener un valor entre 1 y 300!"
    if(!input.defense) errors.defense = "¡debe diligenciar este campo!"

    if(input.speed < 1 || input.speed > 250) errors.speed = "¡debe tener un valor entre 1 y 250!"
    if(!input.speed) errors.speed = "¡debe diligenciar este campo!"

    if(input.height < 1 || input.height > 100) errors.height = "¡debe tener un valor entre 1 y 100!"
    if(!input.height) errors.height = "¡debe diligenciar este campo!"

    if(input.weight < 1 || input.weight > 10000) errors.weight = "¡debe tener un valor entre 1 y 10000!"
    if(!input.weight) errors.weight = "¡debe diligenciar este campo!"

    // if(input.type.length === 0 || input.type.length > 3) errors.type = "¡debes seleccionar almenos un tipo!"
    if(input.type.length === 0 || input.type.length > 2) errors.type = "¡No se pueden seleccionar mas de 2 tipos de pokemon!"
    
    return errors;
}

export default validationInputs;