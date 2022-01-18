import app from '../components/app'


const loadOptions = { crossOrigin: true };

app.loader.baseUrl = "img/";

app.loader.add('pier', 'Pier.png', loadOptions)
    .add('cargo', 'Cargo.png', loadOptions);

app.loader.load(() => {
  app.stage.emit("loaded");
});