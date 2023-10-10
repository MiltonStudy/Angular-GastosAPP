import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.uniminuto.controlgastos',
  appName: 'control-gastos',
  webDir: 'dist/control-gastos',
  server: {
    androidScheme: 'https'
  }
};

export default config;
