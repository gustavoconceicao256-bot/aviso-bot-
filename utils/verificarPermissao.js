
import config from "../configuração/config.js";


export function verificarPermissao(member){


    return member.roles.cache.some(role =>

        config.cargosPermitidos.includes(role.id)

    );


}
