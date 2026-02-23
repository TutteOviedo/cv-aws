# 🚀 Cloud Resume Challenge - AWS Practical Learning

Este proyecto surge como una práctica intensiva y aplicada para familiarizarme con el ecosistema de AWS y sus servicios principales. Mi objetivo principal es consolidar los conocimientos teóricos necesarios para rendir la certificación AWS Certified Solutions Architect – Associate (SAA), llevando la teoría a una arquitectura funcional y segura.

## 🛠️ Implementación Técnica


### Frontend & Hosting

* Desarrollo Web: Interfaz construida con HTML5, CSS3 y Bootstrap para un diseño responsive.

* Integración: Script en JavaScript para la comunicación asíncrona con el backend mediante peticiones a la API.

* Hosting: Alojamiento estático utilizando Amazon S3 optimizado para bajo costo y alta disponibilidad.



### Backend Serverless (El Contador de Visitas)

* Persistencia: Uso de Amazon DynamoDB para almacenar el conteo de visitas de forma atómica.

* Lógica de Negocio: Función AWS Lambda escrita en Python que gestiona la lógica de incremento y respuesta.

* Punto de Enlace: Amazon API Gateway configurado como trigger para la función Lambda.

* Seguridad y Control: Implementé medidas de protección configurando Throttling (Rate y Burst limits) en el API Gateway para mitigar posibles ataques de bots y controlar el consumo de recursos.



### Automatización (DevOps)

* CI/CD Frontend: Pipeline configurado en GitHub Actions que automatiza el despliegue al bucket S3 tras cada commit.

* Gestión de Accesos: Configuración de IAM siguiendo el principio de "mínimo privilegio" y uso de GitHub Secrets para proteger las credenciales.


### Gestión de Costos & Gobernanza (FinOps)

* AWS Budgets: Implementación de un presupuesto con alerta de facturación de $1 USD mensual para asegurar que el proyecto se mantenga dentro del Free Tier.

* CloudWatch: Configuración de una alarma operativa que vigila la métrica de cargos estimados (EstimatedCharges), configurada para dispararse al alcanzar los $0.80 USD.

* Amazon SNS: Creación de un canal de notificaciones que vincula las alertas directamente con mi correo personal, permitiéndome reaccionar ante cualquier consumo inesperado.


## 🚧 Road Map (Próximos Pasos)

* Seguridad & Networking: Configuración de Amazon CloudFront como CDN para habilitar HTTPS mediante un certificado SSL/TLS (AWS Certificate Manager) sobre mi dominio propio.

* CI/CD Backend: Automatizar el despliegue de la función Lambda mediante GitHub Actions.

* Infraestructura como Código (IaC): Migrar toda la infraestructura actual a Terraform para asegurar la replicabilidad y gestión profesional del entorno.
