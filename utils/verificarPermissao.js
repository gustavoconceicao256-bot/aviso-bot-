
import config from "../config/config.js";


export function verificarPermissao(member){


    return member.roles.cache.some(role =>

        config.cargosPermitidos.includes(role.id)

    );


}
