 /** liga para api en produccion  */
 export const environment = {
  production: true,
  api: {
   
    domain: 'http://10.10.29.44:7972/rest/imcv-rest6/v1',
    port: ':5012',
    base: '/v1',
    token : 'd55e01ecd3aebd21f1fc355eb4a9dbe4fb0589a1',
    methods: {
      type: 'Resources',
      authentication: {
        session: '/session'
      },
      routes: {
        routes: '/routes'
      }
      }
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer d55e01ecd3aebd21f1fc355eb4a9dbe4fb0589a1' // + localStorage.getItem("at")

    }
  }

