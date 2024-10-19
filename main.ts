import { datos } from './data.js';
import { Serie } from './serie.js';

let sTbody: HTMLElement = document.getElementById('series')!;
let avgTbody: HTMLElement = document.getElementById("promedio")!;
let avg: number = 0;

seriesTabla(datos);

function seriesTabla(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        avg += serie.seasons;
        trElement.innerHTML = `
            <th>${serie.id}</th>
            <td class="text-primary"><a href="${serie.link}"target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        
        sTbody.appendChild(trElement);
    });
    
    avg = Math.round(avg / series.length);
    avgTbody.innerHTML = `Seasons average: ${avg}`;
}