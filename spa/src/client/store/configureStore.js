import configureStoreDev from './configureStore.dev';

if(process.env.NODE_ENV ==='development') {
    module.exports = configureStoreDev
}