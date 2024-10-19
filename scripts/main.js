import { datos } from './data.js';
var sTbody = document.getElementById('series');
var avgTbody = document.getElementById("promedio");
var avg = 0;
seriesTabla(datos);
function seriesTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        avg += serie.seasons;
        trElement.innerHTML = "\n            <th>".concat(serie.id, "</th>\n            <td class=\"text-primary\"><a href=\"").concat(serie.link, "\"target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        sTbody.appendChild(trElement);
    });
    avg = Math.round(avg / series.length);
    avgTbody.innerHTML = "Seasons average: ".concat(avg);
}
