export const state = {
    products: [
        {
            id: 1,
            name: 'Startup',
            price: {regular: 6999, discounted: 3900},
            quick_elevator_pitch: 'Comienza a darle presencia online a tu negocio con una landing page',
            quick_desc: 'Empower your team, while staying in control',
            advantages: [
              'Enable every employee with a company card',
              'Set individual spending limits for each user',
              'Disable or enable Pleo cards instantly'
            ],
            features: [
              `Dominio GRATIS por 1 año`,
              `2 correos electrónicos`,
              `Enlace a redes sociales`,
              `Host GRATIS por un año`,
              `Visible en todos los dispositivos`,
              `Hasta 5 secciones`
            ],
            image: './startup-illustration.png'
        },
        {
            id: 2,
            name: 'PyME',
            price: {regular: 12999, discounted: 8999},
            quick_elevator_pitch: 'Obten un incremento en tu crecimiento como negocio con el plan',
            quick_desc: 'No more lost receipts and tedious paperwork',
            advantages: [
              'Real-time notifications when a Pleo card is used',
              'Easily capture and match receipts with the Pleo app',
              'Automatic categorization of all purchases'
            ],
            features: [
              `Dominio GRATIS por 2 años`,
              `5 correos electrónicos`,
              `Enlace a redes sociales`,
              `Host GRATIS por 2 años`,
              `Visible en todos los dispositivos`,
              `Hasta 9 secciones`
            ],
            image: 'https://snipcart.com/media/10171/glasses1.jpeg'
        },
        {
            id: 3,
            name: 'Profesional',
            price: {regular: 19999, discounted: 15999},
            quick_elevator_pitch: 'Comienza a darle presencia online a tu negocio con una landing page',
            quick_desc: 'See where the company money is going in real time',
            advantages: [
              'Follow all purchases, categorized with the right receipts',
              'Set custom tags to match the accounting procedures',
              'Integrate and sync Pleo with your accounting system'
            ],
            features: [
              `Dominio GRATIS por 2 años`,
              `5 correos electrónicos`,
              `Enlace a redes sociales`,
              `Host GRATIS por 2 años`,
              `Visible en todos los dispositivos`,
              `Hasta 9 secciones`,
              `Mantenimiento por 2`
            ],
            image: 'https://snipcart.com/media/10171/glasses1.jpeg'
        }
    ]
}
