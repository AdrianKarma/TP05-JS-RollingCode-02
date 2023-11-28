class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    const generaciones = [
      {
        nombre: "Generación Silenciosa",
        inicio: 1930,
        fin: 1948,
        rasgo: "Austeridad",
      },
      { nombre: "Baby Boomers", inicio: 1949, fin: 1968, rasgo: "Ambicioón" },
      {
        nombre: "Generación X",
        inicio: 1969,
        fin: 1980,
        rasgo: "Obsesión por el éxito",
      },
      { nombre: "Millennials", inicio: 1981, fin: 1993, rasgo: "Frustración" },
      {
        nombre: "Generación Z",
        inicio: 1994,
        fin: 2010,
        rasgo: "Irreverencia",
      },
      {
        nombre: "Generación Alpha",
        inicio: 2011,
        fin: 2023,
        rasgo: "Creatividad y curiosidad",
      },
    ];

    const generacionActual = generaciones.find(
      (generacion) =>
        this.añoNacimiento >= generacion.inicio &&
        this.añoNacimiento <= generacion.fin
    );

    return `Generación: ${generacionActual.nombre}<br>Rasgo característico: ${generacionActual.rasgo}`;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de Nacimiento: ${this.añoNacimiento}`;
  }
}

let persona;
function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const DNI = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value.toUpperCase();
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const añoNacimiento = parseInt(
    document.getElementById("añoNacimiento").value
  );

  persona = new Persona(nombre, edad, DNI, sexo, peso, altura, añoNacimiento);

  document.getElementById("resultados").innerHTML =
    "Persona creada exitosamente.";

  document.getElementById("personaForm").reset();
}

function mostrarGeneracion() {
  if (persona) {
    const generacion = persona.mostrarGeneracion();
    document.getElementById("resultados").innerHTML = generacion;
  } else {
    alert("Primero crea una persona.");
  }
}
function esMayorDeEdad() {
  if (persona) {
    const mensaje = persona.esMayorDeEdad()
      ? "La persona es mayor de edad."
      : "La persona no es mayor de edad.";
    document.getElementById("resultados").innerHTML = mensaje;
  } else {
    alert("Primero crea una persona.");
  }
}
function mostrarDatos() {
  if (persona) {
    const datos = persona.mostrarDatos();
    document.getElementById("resultados").innerHTML = datos;
  } else {
    alert("Primero crea una persona.");
  }
}
