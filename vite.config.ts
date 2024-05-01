import { resolve } from 'path'; 
import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';


export default defineConfig({
    plugins:[reactRefresh()],
    build :{
        emptyOutDir :true,
        rollupOptions : {
            input:{
                main : resolve(__dirname,'index.html'),
                about : resolve(__dirname, 'pages/about.html'),
            }
        }
    }
})