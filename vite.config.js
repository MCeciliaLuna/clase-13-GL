import { defineConfig } from "vite";
import api from "./src/api/index"; //importo la API a la configuración general de VITE
import react from "@vitejs/plugin-react-swc";
//1:55

export default defineConfig({
  plugins: [react()],
  server: {
    //el servidor de VITE
    middleware: api, //tendrá como middleware a la API que creamos nosotros
    proxy: {
      //el proxi enmascara el localhost:3000 por el de vite (5173), símil a una VPN
      "/api": {
        //cuando yo vaya a API
        target: "http://localhost:3000", //defino url de mi servidor con el localhost definido ya en API
        logging: true, //decimos que MUESTRE los console.log de la base de datos
      },
    },
  },
  resolve:{
    alias: { //configurar alias para importaciones más fáciles/legibles
      '@styles': './src/styles' //evitamos poner "./././" y sólo busca el @ con el nombre de la carpeta
    }
  }
});
