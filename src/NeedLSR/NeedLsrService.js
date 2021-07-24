const service = {

    getNeedLSR(knex) {
        return knex.from('need-lsr').select('*')
    },
    postNeedLSR(knex, data) {
        return knex
            .insert(data)
            .into('need-lsr')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = service