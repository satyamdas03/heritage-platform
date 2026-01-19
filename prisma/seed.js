const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // Clear existing data
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.product.deleteMany()
    await prisma.videoStory.deleteMany()
    await prisma.designBrief.deleteMany()
    await prisma.material.deleteMany()
    await prisma.artifact.deleteMany()
    await prisma.event.deleteMany()
    await prisma.villageStat.deleteMany()
    await prisma.trail.deleteMany()
    await prisma.artisan.deleteMany()

    console.log('Cleared existing data...')

    // 1. Create Artisans (diverse set)
    const rashid = await prisma.artisan.create({
        data: {
            name: 'Rashid Khan',
            location: 'Bishnupur, Bankura',
            specialty: 'Terracotta & Dokra',
            bio: 'Master craftsman with 40 years of experience in traditional lost-wax casting.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2prvmUYAuAQwELdTLcyAdeuZ62jh0dHG7IttFLGUzZWh5X9GPok5KymOCZsFQvbTBSCmEkaNizv6uk3oJTnIw8D2mLcKqhM-ULxZGnL6NHBaC-Gbitqy2tzuGcyulm-Mg29ow3_7SDC_VA-lLMIG-sYauKD3iPIuycusdf8dEVa9LtzIFwL6kv7T1DR4weI7XWImjRO3SjGtE0HVVuZ8mWfesXtg9JYjhxaqs89TkmFLXYZDbknnJVLjzOWiGjb4HrQwiSKxwCr8',
        },
    })

    const amina = await prisma.artisan.create({
        data: {
            name: 'Amina Begum',
            location: 'Birbhum, Shantiniketan',
            specialty: 'Kantha Embroidery',
            bio: 'Third-generation Kantha artist preserving the art of storytelling through needlework.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGdNQsXOzJxL6dHkRSDMXavitfMgYfAriG0pR77cZLz-eoLFaeC8YzOrDSE2nm7cMdaDRnoM1hN8nF8YBvkR5HwN_m7m-3EEYAtzZyNw2TRUKaXGgH-SOkuL8qDh4aPVXb9xhNJOQzWPqTATUVYgFfTDF8Hb-n5qW5A9UNmt6t8JHaYPz3XQJJcoKAmPq00tUPVhplUQx8c5qACGpW1r_UwWhVM7M7Vkc9eekCzEN17CGbBt7jZNbkRcIyN7NezNrcQlk9bgge-M',
        },
    })

    const gourab = await prisma.artisan.create({
        data: {
            name: 'Gourab Karmakar',
            location: 'Panchmura, Bankura',
            specialty: 'Dokra Metal Casting',
            bio: 'Known for intricate Dokra figurines using the ancient lost-wax technique.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3FBdCtarR-gplkKZsW6Zi3zHAg8_3OGTEnqM_rRQxAjrHJFuxlEu3RYt6D_XRfr64P15Ad-WlyEgDUX30N10K9Fh_wuwqAegs5VzElr0ApBgqG7uRbSLAzKR0lVXU_Yxvcm8YrKsckB67vS53IUfXp09FG5IEBvpQe_6t0Pp0CMBL1PhKUBfyIzRvd6NixM-LwR5SV-L8UgnawOiwkCgAVBvsPQGB1hCMnimJVi-t-5xpe-e_8yZR5lm9dL_2YFiewCqXeF9FM',
        },
    })

    const bishnu = await prisma.artisan.create({
        data: {
            name: 'Bishnu Pal',
            location: 'Kumartuli, Kolkata',
            specialty: 'Clay Sculpture',
            bio: 'Award-winning idol maker specializing in Durga and Ganesh sculptures.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQvw_9b25L8FqA812zyO1bvHzH-UZUyV7eFQI8GWpOoPNLiAoyB41aMwaVrot1EIFc5hy61waSaAz75pvtDVT1EG2BrThn1T_eD79Gwpw2eKYHR63FKp2Qf8UUWxU8YIoQmMdrPEMklvgyQHJwkk1IytDDBef15X5s5CijvFg8P5NfkdROye9rfQhfq3vmeHcaUDmqpTikaOKOoyBUEWsLPYtK9PcXlYgUx2MZjt6e-wm2X3lYvWGyAg9kZvH63trvl82SApCa87E',
        },
    })

    const suresh = await prisma.artisan.create({
        data: {
            name: 'Suresh Mondal',
            location: 'Nadia, West Bengal',
            specialty: 'Jamdani Weaving',
            bio: 'Master weaver creating exquisite Jamdani sarees with intricate floral motifs.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPRxuO6y95jzmzdqlWHv9yz5EwG7mNqtiFbYoq2HLiaSmvFhnNtXGNOxPFiaUBynQnQUeSeIFjgRYfO6JBqqkuXrjeCorYYbi4CIyqUBmZCI9h25uwXDDYEtffW9THsD1IqHGJhnVi50qHQnx7LZQhGUs31ayZgQUHi6iIe5DEzUn8dJIydTQaClYeyOBmgonDCQb_IF5lNtHpGlA0i7tf46elzztoEztVTG5KOKueh8ghygKGas4h5gIKm68o0qRY0VAcHddZYAM',
        },
    })

    const lakshmi = await prisma.artisan.create({
        data: {
            name: 'Lakshmi Devi',
            location: 'Purulia, West Bengal',
            specialty: 'Chhau Mask Making',
            bio: 'Traditional Chhau mask artisan preserving Bengal\'s vibrant folk theatre heritage.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYuesNMxvBwgcO34N5DmLd_uIG4Egxr8u9H0MnWOM1mzQF6kLSIpV_KBKdM8QALwKh4gHCWfjj2_QvSwoiPzfP4rXzdR6czahqv8sOrdE4aYVgZZ2WDgJYN35bno4Sx7Fj3yvd05iPY4dwEVUWJQcWkb-0emuuJmLyyqc0do_9DyytjIB0v2Af4oLvDgtwEGBfDbxqkpqCMGFswFeZVw2_FWQyjlW-c3NuZqcXKVhbXgSe-Pmi4OWqFwGFk4D3Vwzrfe07VFahnkI',
        },
    })

    // 2. Create Products (diverse set)
    await prisma.product.createMany({
        data: [
            {
                title: 'Dokra Horse of Bankura',
                description: 'Traditional brass metal casting using lost-wax technique. Symbol of Bengal\'s heritage.',
                price: 2500,
                category: 'Dokra',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf7T2K8D3tTHkwoQejYn65w5NMGNi8muqFxVjharaZ00lBd0eYsLxphnBv4m99dgWLAA_SxShF9TQXz6r1FOWfXA_JdX3CdTkzuAfgTk1yHfmFe44h11bYThV8UU5lyY5296UkamYbjSaujKeOj0Ck0wlxG51PgiDneUJPPFkcVknL0UTghXukfNBnf_4Ko2I2vBYMbq0vl83uxzGm6Hgc4fIZJsHmTBFgCSLFjfhSLwnyCWUY-buxeqe-jwkLtZqYuPUbACuR9eE',
                artisanId: rashid.id,
            },
            {
                title: 'Terracotta Planter',
                description: 'Hand-molded clay planter with tribal motifs, perfect for home gardens.',
                price: 850,
                category: 'Terracotta',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq4teoD0tLHtV40Qj-i6cv2ki_LCLHH9EWVWjJ7YpsK6fbJH8mpbUqPoOsXArMPNCWF56HcnHDTiFkRY0igq1FDCDddFCy-JscMsHDh_d2YAmgYtiIFvhzygJ3XMFqyybGtzgXveFGK2MzYwX9SRDvgI1NsD6vV_aFD-PYsiYGd3_fCoxATym72NIt43RdIKflGgnufqRWSQR4cniWaW5qeVgMcZ0rPxrH4Ro6HIpoCpw_EQiWuNezn1wk7PtYp-6ZBkTqLAxt-Jc',
                artisanId: rashid.id,
            },
            {
                title: 'Dokra Elephant Figurine',
                description: 'Auspicious brass elephant sculpture crafted with ancient lost-wax process.',
                price: 3200,
                category: 'Dokra',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3FBdCtarR-gplkKZsW6Zi3zHAg8_3OGTEnqM_rRQxAjrHJFuxlEu3RYt6D_XRfr64P15Ad-WlyEgDUX30N10K9Fh_wuwqAegs5VzElr0ApBgqG7uRbSLAzKR0lVXU_Yxvcm8YrKsckB67vS53IUfXp09FG5IEBvpQe_6t0Pp0CMBL1PhKUBfyIzRvd6NixM-LwR5SV-L8UgnawOiwkCgAVBvsPQGB1hCMnimJVi-t-5xpe-e_8yZR5lm9dL_2YFiewCqXeF9FM',
                artisanId: gourab.id,
            },
            {
                title: 'Durga Clay Sculpture',
                description: 'Handcrafted Durga idol from Kumartuli, painted with natural pigments.',
                price: 15000,
                category: 'Terracotta',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQvw_9b25L8FqA812zyO1bvHzH-UZUyV7eFQI8GWpOoPNLiAoyB41aMwaVrot1EIFc5hy61waSaAz75pvtDVT1EG2BrThn1T_eD79Gwpw2eKYHR63FKp2Qf8UUWxU8YIoQmMdrPEMklvgyQHJwkk1IytDDBef15X5s5CijvFg8P5NfkdROye9rfQhfq3vmeHcaUDmqpTikaOKOoyBUEWsLPYtK9PcXlYgUx2MZjt6e-wm2X3lYvWGyAg9kZvH63trvl82SApCa87E',
                artisanId: bishnu.id,
            },
            {
                title: 'Jamdani Saree',
                description: 'Exquisite handloom Jamdani with intricate floral patterns woven in gold thread.',
                price: 18500,
                category: 'Textile',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ758jVzJVt7Vqyh45YO21yccGrTUrl1RwsWdC7sO0n4v50T1qbXi5y1E4I2DDeSOe9b0BQGUkKoTCLe3H3HOutkG7xMXsTwA7XXg6k4dFE-Rdh-IZ5_Cdpm0Agq5k22Olfjv3IBCtYlT54LZJh6C4P-Q0coclAAAIhGihJWbCw3KSrFEvBmo1VL-JMLRwVk0gFNPE_TRJIWrDmgqNCbrcf1tLoqZDzTfuu-6WHcZYe6IdVXsi1ALUkLM-OqJ77-WXaxHuLsQZMoM',
                artisanId: suresh.id,
            },
            {
                title: 'Chhau Dance Mask',
                description: 'Vibrant Chhau mask depicting mythological characters, used in folk performances.',
                price: 5500,
                category: 'Mask',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYuesNMxvBwgcO34N5DmLd_uIG4Egxr8u9H0MnWOM1mzQF6kLSIpV_KBKdM8QALwKh4gHCWfjj2_QvSwoiPzfP4rXzdR6czahqv8sOrdE4aYVgZZ2WDgJYN35bno4Sx7Fj3yvd05iPY4dwEVUWJQcWkb-0emuuJmLyyqc0do_9DyytjIB0v2Af4oLvDgtwEGBfDbxqkpqCMGFswFeZVw2_FWQyjlW-c3NuZqcXKVhbXgSe-Pmi4OWqFwGFk4D3Vwzrfe07VFahnkI',
                artisanId: lakshmi.id,
            },
            {
                title: 'Tussar Silk Stole',
                description: 'Natural dyed Tussar silk stole with handwoven tribal patterns.',
                price: 2800,
                category: 'Textile',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlAqSPqPEELBYkMX9t4_FBSrrn3dZisb228k_itTTEG7rtVtJbRB4qMBP6C5EgJXVZvc-89nFPrsJ_zVRXDLxON7PqJCZ8fqIBb-QqppMokBKx_cQvsUlcz5f9h75a8hj6wJ-d3gIZofFc1HWJU9ee_uRwDbyqY2n_uzbEJCSf1SbcSZmYMt1igYRiAoGvMDe2Dsxm5wAmBI9fDt6007pmUoKMgHwoYTgWtiheT95HCc576_jeZrJUxE69gPKzGNcsz-n0HkNrXk',
                artisanId: amina.id,
            },
        ],
    })

    // 3. Create Trails
    await prisma.trail.createMany({
        data: [
            {
                title: 'The Terracotta Trail of Bishnupur',
                description: 'Walk through history in burnt clay. Explore the ancient temples of the Malla kings.',
                duration: '3 Days / 2 Nights',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXhhrYAVYt5CoLnx0lX2IbWPg6aPQR65cLCq1vzTj47-t-ylUncG3anRQTZJvXstjTSMNUCIMqJygMvprOc_jIsDelXJqwjtucfeNqoMQTyHquA8ZIPzyW6tCbYOxXcgNR2PtMyDK30W3TC1hBf3uXylG0Sog5UdHtlZ6Z1Oq9Yy2BZ-gM2ba0knehjrmrpto-J320c9Gg_7gg_iCZ2AmTVCcWbBXqDxmQEuOEwPLHa-IQ9bGazC-i4Us2PDL-ZwesWD0qG0gRw0',
                tags: '["Moderate", "Small Group"]',
            },
            {
                title: 'The Weaver\'s Path in Phulia',
                description: 'From thread to timeless sari. Stay in a weaver\'s home and witness the magic of looms.',
                duration: '2 Days / 1 Night',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8sMRxwo3gw6i8gLeuwInYLPGrhy3S5RLIqMEKWbUFibldCfodSsUUt7Sec02JWJs38BBt91w3l1VqdnSLTkRqfw9TDPkPJctFnv9w34CgY3etzB0z0Ln0EVHcQE6Hu6IKR7GvMzGRgO0m_mUSS1tUeRIo4p08XaOVeZ9JkRUdzZFFD__C1yfx8NrT6Md2EFWyCbkBj1FyY4tDtul5yp98VDaKjefB_IZzcBz8Uk-L85SgxM19CITEwc2GoaO07BTYLRDiu5eBiOI',
                tags: '["Relaxed", "Homestay"]',
            },
            {
                title: 'Dokra Discovery in Panchmura',
                description: 'Witness the ancient lost-wax metal casting technique in the heart of Bankura.',
                duration: '1 Day',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3FBdCtarR-gplkKZsW6Zi3zHAg8_3OGTEnqM_rRQxAjrHJFuxlEu3RYt6D_XRfr64P15Ad-WlyEgDUX30N10K9Fh_wuwqAegs5VzElr0ApBgqG7uRbSLAzKR0lVXU_Yxvcm8YrKsckB67vS53IUfXp09FG5IEBvpQe_6t0Pp0CMBL1PhKUBfyIzRvd6NixM-LwR5SV-L8UgnawOiwkCgAVBvsPQGB1hCMnimJVi-t-5xpe-e_8yZR5lm9dL_2YFiewCqXeF9FM',
                tags: '["Active", "Workshop"]',
            },
        ],
    })

    // 4. Create Village Stats
    await prisma.villageStat.createMany({
        data: [
            { villageName: 'Panchmura', livesImpacted: 1250, projectsFunded: 14, fundsDistributed: 2500000 },
            { villageName: 'Bishnupur', livesImpacted: 890, projectsFunded: 8, fundsDistributed: 1800000 },
            { villageName: 'Kumartuli', livesImpacted: 2100, projectsFunded: 22, fundsDistributed: 4500000 },
        ],
    })

    // 5. Create Artifacts
    await prisma.artifact.createMany({
        data: [
            {
                title: 'Dasavatar Card Set',
                description: 'Rare playing cards from the Malla era depicting ten avatars of Vishnu.',
                material: 'Cloth & Natural Lacquer',
                era: '17th Century',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkDnhQwexA6NKA3HFiYaE338IkITmzuPMVt9svUjxf2b9r7FfI5TRjybEtFkG6f-4rNsvSQ4hjJgDx0UaRcjtJfUnKPLV09tlyDl9tfIBDXszFiBA9-A1JXF5h3HYq9ZmNLJIhy1Cm_LWBNAsoGIIClMAtk0fCCmvj4_kiobtlRB-Ye25lM5d3v3GuU2Fc7KyvkqaGrgnYn4-JRijwGRDRdjconk8Ymt3LbFGMdKaVLACJCRcRYhKF12HpFiEHSuiMMzd-sGkxNVs',
                endangeredLevel: 'Critical',
            },
            {
                title: 'Malla Dynasty Bronze Bell',
                description: 'Temple bell from the reign of the Malla kings, featuring Sanskrit inscriptions.',
                material: 'Bronze',
                era: '16th Century',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf7T2K8D3tTHkwoQejYn65w5NMGNi8muqFxVjharaZ00lBd0eYsLxphnBv4m99dgWLAA_SxShF9TQXz6r1FOWfXA_JdX3CdTkzuAfgTk1yHfmFe44h11bYThV8UU5lyY5296UkamYbjSaujKeOj0Ck0wlxG51PgiDneUJPPFkcVknL0UTghXukfNBnf_4Ko2I2vBYMbq0vl83uxzGm6Hgc4fIZJsHmTBFgCSLFjfhSLwnyCWUY-buxeqe-jwkLtZqYuPUbACuR9eE',
                endangeredLevel: 'Endangered',
            },
        ],
    })

    // 6. Create Video Stories (Artisan Speaks)
    await prisma.videoStory.createMany({
        data: [
            {
                title: 'Sculpting History',
                description: 'Bishnu Pal shares his journey of 40 years working with terracotta.',
                thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQvw_9b25L8FqA812zyO1bvHzH-UZUyV7eFQI8GWpOoPNLiAoyB41aMwaVrot1EIFc5hy61waSaAz75pvtDVT1EG2BrThn1T_eD79Gwpw2eKYHR63FKp2Qf8UUWxU8YIoQmMdrPEMklvgyQHJwkk1IytDDBef15X5s5CijvFg8P5NfkdROye9rfQhfq3vmeHcaUDmqpTikaOKOoyBUEWsLPYtK9PcXlYgUx2MZjt6e-wm2X3lYvWGyAg9kZvH63trvl82SApCa87E',
                duration: '08:30',
                artisanId: bishnu.id,
                tags: '["Terracotta", "Bankura"]',
            },
            {
                title: 'Threads of Memory',
                description: 'Amina Begum demonstrates the ancient Kantha stitch passed down through generations.',
                thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGdNQsXOzJxL6dHkRSDMXavitfMgYfAriG0pR77cZLz-eoLFaeC8YzOrDSE2nm7cMdaDRnoM1hN8nF8YBvkR5HwN_m7m-3EEYAtzZyNw2TRUKaXGgH-SOkuL8qDh4aPVXb9xhNJOQzWPqTATUVYgFfTDF8Hb-n5qW5A9UNmt6t8JHaYPz3XQJJcoKAmPq00tUPVhplUQx8c5qACGpW1r_UwWhVM7M7Vkc9eekCzEN17CGbBt7jZNbkRcIyN7NezNrcQlk9bgge-M',
                duration: '15:10',
                artisanId: amina.id,
                tags: '["Kantha", "Embroidery"]',
            },
            {
                title: 'Metal and Fire',
                description: 'Gourab Karmakar reveals the secrets of Dokra metal casting.',
                thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3FBdCtarR-gplkKZsW6Zi3zHAg8_3OGTEnqM_rRQxAjrHJFuxlEu3RYt6D_XRfr64P15Ad-WlyEgDUX30N10K9Fh_wuwqAegs5VzElr0ApBgqG7uRbSLAzKR0lVXU_Yxvcm8YrKsckB67vS53IUfXp09FG5IEBvpQe_6t0Pp0CMBL1PhKUBfyIzRvd6NixM-LwR5SV-L8UgnawOiwkCgAVBvsPQGB1hCMnimJVi-t-5xpe-e_8yZR5lm9dL_2YFiewCqXeF9FM',
                duration: '14:15',
                artisanId: gourab.id,
                tags: '["Dokra", "Metal Casting"]',
            },
        ],
    })

    // 7. Create Design Briefs (Designer Hub)
    await prisma.designBrief.createMany({
        data: [
            { title: 'Modern Kantha Jacket Collection', description: 'Skilled embroiderers for a fusion outerwear collection blending denim with Nakshi Kantha.', category: 'Apparel', status: 'Open', proposals: 6 },
            { title: 'Sustainable Jamdani Scarves', description: 'New line of organic cotton Jamdani weaves with natural dye sourcing.', category: 'Textile', status: 'In Progress', proposals: 3 },
        ],
    })

    // 8. Create Materials (Designer Hub)
    await prisma.material.createMany({
        data: [
            { name: 'Royal Red Jamdani', type: 'Dhaka Weave', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ758jVzJVt7Vqyh45YO21yccGrTUrl1RwsWdC7sO0n4v50T1qbXi5y1E4I2DDeSOe9b0BQGUkKoTCLe3H3HOutkG7xMXsTwA7XXg6k4dFE-Rdh-IZ5_Cdpm0Agq5k22Olfjv3IBCtYlT54LZJh6C4P-Q0coclAAAIhGihJWbCw3KSrFEvBmo1VL-JMLRwVk0gFNPE_TRJIWrDmgqNCbrcf1tLoqZDzTfuu-6WHcZYe6IdVXsi1ALUkLM-OqJ77-WXaxHuLsQZMoM', origin: 'Nadia, West Bengal' },
            { name: 'Tussar Silk', type: 'Raw Finish', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlAqSPqPEELBYkMX9t4_FBSrrn3dZisb228k_itTTEG7rtVtJbRB4qMBP6C5EgJXVZvc-89nFPrsJ_zVRXDLxON7PqJCZ8fqIBb-QqppMokBKx_cQvsUlcz5f9h75a8hj6wJ-d3gIZofFc1HWJU9ee_uRwDbyqY2n_uzbEJCSf1SbcSZmYMt1igYRiAoGvMDe2Dsxm5wAmBI9fDt6007pmUoKMgHwoYTgWtiheT95HCc576_jeZrJUxE69gPKzGNcsz-n0HkNrXk', origin: 'Bhagalpur, Bihar' },
            { name: 'Nakshi Kantha', type: 'Floral Motif', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35tZN_wJY6qQyZJTgJSnXie8r9nHgCv48GLRGqVM_wo_cErG58F9gPrYyWTFtMhj1UQfeRv96vzyK72--6AgNSeWPc5kVHbalp47HqEeT7dPj3rPMmNujRo3XNVI_UMUF-0HKnQOY4bMNNWGGHuKjNaaA5zfyEZq7663umw2wI4MGhjAgkpF_ptGKjNem6n-QhWF1tdRUXLweTUQ54aI9C_TQ77I4JBGYG9mWZqnGcFhLrl2_XN2D8uIV-kLnb418AAop3nLOIy4', origin: 'Birbhum, West Bengal' },
        ],
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
