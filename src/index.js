let files = [];

function importAll(r) {
  r.keys().forEach((s, i) => {
    files[i] = r(s);
  });
}

importAll(require.context("./assets/fonts/", true, /\.css$/));
importAll(require.context("./app/", true, /\.css|\.less$/));
import "./app/less/index.less";
import "./app/index";
