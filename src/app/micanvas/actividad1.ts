
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
    private panelJuego: Panel;
    private imagenFondo: Imagen;
    private btnStart: Button;
    private btnContinuar: Button;
    private btnSalir: Button;
    private window: Window;
    private lblPregunta: Label;
    private respuesta1: Button;
    private respuesta2: Button;
    private respuesta3: Button;
    private respuesta4: Button;

    constructor(vMotor: Motor) {
        this.motor = vMotor;
        this.imagenFondo = new Imagen(this.motor, 0, 0, DataHolder.instance.nScreenWidth, DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondo.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
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

        this.btnStart = new Button(this.motor,this.panelMenu.w/3,0,this.panelMenu.w/3,this.panelMenu.h/3);
        this.btnStart.setImagePath('./assets/btn.png');
        this.btnStart.setTexto('Start');
        this.motor.addViewToParentView(this.panelMenu, this.btnStart);

        this.btnContinuar = new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3,this.panelMenu.w/3,this.panelMenu.h/3);
        this.btnContinuar.setImagePath('./assets/btn.png');
        this.btnContinuar.setTexto('Continuar');
        this.btnContinuar.setListener(this);
        this.motor.addViewToParentView(this.panelMenu, this.btnContinuar);
        

        this.btnSalir = new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3*2,this.panelMenu.w/3,this.panelMenu.h/3);
        this.btnSalir.setImagePath('./assets/btn.png');
        this.btnSalir.setTexto('Salir');
        this.motor.addViewToParentView(this.panelMenu, this.btnSalir);
        
    }

    private crearEscenarioJuego(): void {
        //Preguntas
        //Respuestas
        //Respuestas Correctas
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TAMAÑO DE LA PANTALLA");
      }

      buttonListenerOnClick?(btn:Button): void{
        //if()
      }
}