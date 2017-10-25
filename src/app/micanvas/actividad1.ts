
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin, EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button} from '../milib/views/buttons/button';
import {Window} from '../milib/views/windows/window';
import {Label} from '../milib/views/labels/label';



export class Actividad1 implements EventsAdminListener {

    private motor: Motor;
    private panelMenu: Panel;
    private imagenFondo: Imagen;
    private btnStart: Button;
    private btnContinuar: Button;
    private btnRes1: Button;
    private btnRes2: Button;
    private btnRes3: Button;
    private btnRes4: Button;
    private contador: number;
    private btnSalir: Button;
    private window: Window;
    private lblPregunta: Label;
    private arrPreguntas: string[];
    private arrRespuestas: Array<string[]>;
    private arrRespuestasCorrectas: String[];

    constructor(vMotor: Motor) {
        this.motor = vMotor;
        this.imagenFondo = new Imagen(this.motor, 0, 0, DataHolder.instance.nScreenWidth, DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondo.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.contador=-1;
        this.window = new Window (this.motor, 0, 0, DataHolder.instance.nScreenWidth, DataHolder.instance.nScreenHeight);
        this.window.btnSalir.setListener(this);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu(): void {
        let pmw = DataHolder.instance.nScreenWidth * 0.6;
        let pmh = DataHolder.instance.nScreenHeight * 0.6;
        let pmx = DataHolder.instance.nScreenWidth2 - (pmw>>1);
        let pmy = DataHolder.instance.nScreenHeight2 - (pmh>>1);
        this.panelMenu = new Panel(this.motor, pmx, pmy, pmw, pmh);
        this.motor.addViewToParentView(this.imagenFondo, this.panelMenu);
        // Creacion boton Start, fondo con imagen, texto y establecimento de orden jerarquico
        this.btnStart = new Button(this.motor, this.panelMenu.w - 30, 0, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnStart.setImagePath('./assets/btn.png');
        this.btnStart.setTexto('Start');
        this.btnStart.setFontColor('white');
        this.btnStart.setFontStyle('');
        this.btnStart.setListener(this);
        this.motor.addViewToParentView(this.panelMenu, this.btnStart);

        // Creacion boton continuar, fondo con imagen, texto y establecimento de orden jerarquico
        this.btnContinuar = new Button(this.motor, this.panelMenu.w -30, this.panelMenu.h/ 3, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnContinuar.setImagePath('./assets/btn.png');
        this.btnContinuar.setTexto('Continuar');
        this.btnContinuar.setListener(this);
        this.motor.addViewToParentView(this.panelMenu, this.btnContinuar);
        // Creacion boton salir, fondo con imagen, texto y establecimento de orden jerarquico
        this.btnSalir = new Button(this.motor, this.panelMenu.w - 30, this.panelMenu.h / 3 *2, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnSalir.setImagePath('./assets/btn.png');
        this.btnSalir.setTexto('Salir');
        this.btnSalir.setListener(this);
        this.motor.addViewToParentView(this.panelMenu, this.btnSalir);

        this.motor.addViewToParentView(this.imagenFondo, this.window);
        this.motor.setViewVisibility(this.window.uid, false);
        

    }

    private crearEscenarioJuego(): void {
        // Preguntas
        this.arrPreguntas = [
            'De que color es el caballo blanco de santiago?',
            'En ESTE BANco estan sentados un padre y su hijo, como se llama el padre?',
            'Si 5 gatos cazan 5 ratones en 5 minutos.¿Cuantos gatos cazaran 100 ratones en 100 minutos?'
        ];

        // Respuestas

        this.arrRespuestas = new Array<string[]>();
        let arr1: string[] = ['#FFFFFF', '#000000', '#6d4747', '#565656'];
        this.arrRespuestas[0] = arr1;
        arr1 = ['Sinforiano', 'Eulalio', 'Decoroso', 'ESTEBAN'];
        this.arrRespuestas[1] = arr1;
        arr1 = ['5 gatos', '100 gatos', '20 gatos', 'Con metodologia Scrum 2 gatos'];
        this.arrRespuestas[2] = arr1;
        console.log(this.arrRespuestas);

        

        this.btnRes1 = new Button(this.motor, this.panelMenu.w/2-400, this.panelMenu.h+100, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnRes1.setImagePath('./assets/btn.png');
        this.btnRes1.setTexto('Continuar');
        this.btnRes1.setListener(this);
        this.motor.addViewToParentView(this.window, this.btnRes1);
        

        this.btnRes2 = new Button(this.motor, this.panelMenu.w/2-200, this.panelMenu.h+100, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnRes2.setImagePath('./assets/btn.png');
        this.btnRes2.setTexto('Continuar');
        this.btnRes2.setListener(this);
        this.motor.addViewToParentView(this.window, this.btnRes2);
        

        this.btnRes3 = new Button(this.motor, this.panelMenu.w/2+200, this.panelMenu.h+100, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnRes3.setImagePath('./assets/btn.png');
        this.btnRes3.setTexto('Continuar');
        this.btnRes3.setListener(this);
        this.motor.addViewToParentView(this.window, this.btnRes3);
        

        this.btnRes4 = new Button(this.motor, this.panelMenu.w, this.panelMenu.h+100, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.btnRes4.setImagePath('./assets/btn.png');
        this.btnRes4.setTexto('Continuar');
        this.btnRes4.setListener(this);
        this.motor.addViewToParentView(this.window, this.btnRes4);
        

        this.lblPregunta = new Label(this.motor, this.panelMenu.w/2, this.panelMenu.h/ 3, this.panelMenu.w/3, this.panelMenu.h/3-9);
        this.lblPregunta.setTexto('');
        this.lblPregunta.setColor('color');
        this.motor.addViewToParentView(this.window, this.lblPregunta);
        

    }


    screenSizeChanged?(vWidth: number, vHeight: number): void {
        console.log('SE HA ACTUALIZADO EL TAMAÑO DE LA PANTALLA');
      }

      buttonListenerOnClick?(btn: Button): void {
          if (btn == this.btnStart) {
              this.contador = 0;
              this.motor.setViewVisibility(this.panelMenu.uid, false);
              this.motor.setViewVisibility(this.window.uid, true);
              this.lblPregunta.setTexto(this.arrPreguntas[0]);
              this.btnRes1.setTexto(this.arrRespuestas[0][0]);
              this.btnRes2.setTexto(this.arrRespuestas[0][1]);
              this.btnRes3.setTexto(this.arrRespuestas[0][2]);
              this.btnRes4.setTexto(this.arrRespuestas[0][3]);

          } else if (btn == this.btnRes1 && this.contador == 0) {
            this.contador = 1;
            this.lblPregunta.setTexto(this.arrPreguntas[1]);
            this.btnRes1.setTexto(this.arrRespuestas[1][0]);
            this.btnRes2.setTexto(this.arrRespuestas[1][1]);
            this.btnRes3.setTexto(this.arrRespuestas[1][2]);
            this.btnRes4.setTexto(this.arrRespuestas[1][3]);


          } else if (btn == this.btnRes2 && this.contador == 1) {
            this.contador = 2;
            this.lblPregunta.setTexto(this.arrPreguntas[2]);
            this.btnRes1.setTexto(this.arrRespuestas[2][0]);
            this.btnRes2.setTexto(this.arrRespuestas[2][1]);
            this.btnRes3.setTexto(this.arrRespuestas[2][2]);
            this.btnRes4.setTexto(this.arrRespuestas[2][3]);

          } else if (btn == this.btnRes1 && this.contador == 2) {
            this.motor.setViewVisibility(this.window.uid, false);
            this.motor.setViewVisibility(this.panelMenu.uid, false);
            this.imagenFondo.setImg('./assets/win.jpeg');

          }else if (btn == this.window.btnSalir) {
            this.motor.setViewVisibility(this.window.uid, false);
            this.motor.setViewVisibility(this.panelMenu.uid, true);
          } else if (btn == this.btnContinuar && this.contador != -1) {
            this.motor.setViewVisibility(this.window.uid, true);
            this.motor.setViewVisibility(this.panelMenu.uid, false);
            this.lblPregunta.setTexto(this.arrPreguntas[this.contador]);
            this.btnRes1.setTexto(this.arrRespuestas[this.contador][0]);
            this.btnRes2.setTexto(this.arrRespuestas[this.contador][1]);
            this.btnRes3.setTexto(this.arrRespuestas[this.contador][2]);
            this.btnRes4.setTexto(this.arrRespuestas[this.contador][3]);
          } else if (btn == this.btnContinuar && this.contador == -1) {
          }else if (btn == this.btnSalir) {
            this.motor.setViewVisibility(this.panelMenu.uid, false);
            this.imagenFondo.setImg('./assets/salir.gif');
            
          } else {
            this.contador=-1;
            this.motor.setViewVisibility(this.window.uid, false);
            this.imagenFondo.setImg('./assets/fin.jpg');
            
          }
      }

}
