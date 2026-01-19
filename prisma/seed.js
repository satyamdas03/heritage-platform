const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // 1. Create Artisans
    const rashid = await prisma.artisan.create({
        data: {
            name: 'Rashid Khan',
            location: 'Bishnupur, Bankura',
            specialty: 'Terracotta & Dokra',
            bio: 'Master craftsman with 40 years of experience in traditional lost-wax casting.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2prvmUYAuAQwELdTLcyAdeuZ62jh0dHG7IttFLGUzZWh5X9GPok5KymOCZsFQvbTBSCmEkaNizv6uk3oJTnIw8D2mLcKqhM-ULxZGnL6NHBaC-Gbitqy2tzuGcyulm-Mg29ow3_7SDC_VA-lLMIG-sYauKD3iPIuycusdf8dEVa9LtzIFwL6kv7T1DR4weI7XWImjRO3SjGtE0HVVuZ8mWfesXtg9JYjhxaqs89TkmFLXYZDbknnJVLjzOWiGjb4HrQwiSKxwCr8',
            products: {
                create: [
                    {
                        title: 'Dokra Horse of Bankura',
                        description: 'Traditional brass metal casting using lost-wax technique.',
                        price: 2500,
                        category: 'Dokra',
                        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf7T2K8D3tTHkwoQejYn65w5NMGNi8muqFxVjharaZ00lBd0eYsLxphnBv4m99dgWLAA_SxShF9TQXz6r1FOWfXA_JdX3CdTkzuAfgTk1yHfmFe44h11bYThV8UU5lyY5296UkamYbjSaujKeOj0Ck0wlxG51PgiDneUJPPFkcVknL0UTghXukfNBnf_4Ko2I2vBYMbq0vl83uxzGm6Hgc4fIZJsHmTBFgCSLFjfhSLwnyCWUY-buxeqe-jwkLtZqYuPUbACuR9eE',
                    },
                    {
                        title: 'Terracotta Planter',
                        description: 'Hand-molded clay planter with tribal motifs.',
                        price: 850,
                        category: 'Terracotta',
                        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq4teoD0tLHtV40Qj-i6cv2ki_LCLHH9EWVWjJ7YpsK6fbJH8mpbUqPoOsXArMPNCWF56HcnHDTiFkRY0igq1FDCDddFCy-JscMsHDh_d2YAmgYtiIFvhzygJ3XMFqyybGtzgXveFGK2MzYwX9SRDvgI1NsD6vV_aFD-PYsiYGd3_fCoxATym72NIt43RdIKflGgnufqRWSQR4cniWaW5qeVgMcZ0rPxrH4Ro6HIpoCpw_EQiWuNezn1wk7PtYp-6ZBkTqLAxt-Jc',
                    }
                ],
            },
        },
    })

    // 2. Create Trails
    await prisma.trail.create({
        data: {
            title: 'The Terracotta Trail of Bishnupur',
            description: 'Walk through history in burnt clay. Explore the ancient temples of the Malla kings.',
            duration: '3 Days / 2 Nights',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXhhrYAVYt5CoLnx0lX2IbWPg6aPQR65cLCq1vzTj47-t-ylUncG3anRQTZJvXstjTSMNUCIMqJygMvprOc_jIsDelXJqwjtucfeNqoMQTyHquA8ZIPzyW6tCbYOxXcgNR2PtMyDK30W3TC1hBf3uXylG0Sog5UdHtlZ6Z1Oq9Yy2BZ-gM2ba0knehjrmrpto-J320c9Gg_7gg_iCZ2AmTVCcWbBXqDxmQEuOEwPLHa-IQ9bGazC-i4Us2PDL-ZwesWD0qG0gRw0',
            tags: '["Moderate", "Small Group"]',
        },
    })

    await prisma.trail.create({
        data: {
            title: 'The Weaver’s Path in Phulia',
            description: 'From thread to timeless sari. Stay in a weaver\'s home and witness the magic of looms.',
            duration: '2 Days / 1 Night',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8sMRxwo3gw6i8gLeuwInYLPGrhy3S5RLIqMEKWbUFibldCfodSsUUt7Sec02JWJs38BBt91w3l1VqdnSLTkRqfw9TDPkPJctFnv9w34CgY3etzB0z0Ln0EVHcQE6Hu6IKR7GvMzGRgO0m_mUSS1tUeRIo4p08XaOVeZ9JkRUdzZFFD__C1yfx8NrT6Md2EFWyCbkBj1FyY4tDtul5yp98VDaKjefB_IZzcBz8Uk-L85SgxM19CITEwc2GoaO07BTYLRDiu5eBiOI',
            tags: '["Relaxed", "Homestay"]',
        },
    })

    // 3. Create Events (Calendar)
    await prisma.event.create({
        data: {
            title: 'Basanta Utsav',
            date: new Date('2024-03-25'),
            season: 'Basanta',
            description: 'The festival of colors celebrated with traditional songs and dances.',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3w-N0veqBOzzS7Y0vLl92QW4OoN8XS-gFsoX2Sb1_AxXjnVM01zdR2lJlElJPPIR8_i_vFv1pkGz0J0TOmU_FEFS80BidC9qdeYTvdp1UM5AuGFrgW3hquMZkw_uiT2CvyPyB8qGe7TfOKiYI6BiUywINxMiDBwNyhf7-l2g1ntbIk7dif7ozpWxUlDPu2my5NXVoQ32Red8caBh5NUWxpgbptpilJL8Vqla49LHllL5G2gi2tRp8iLx0gGk3E5PCcqefwdgMsdI',
        },
    })

    // 4. Create Village Stats
    await prisma.villageStat.create({
        data: {
            villageName: 'Panchmura',
            livesImpacted: 1250,
            projectsFunded: 14,
            fundsDistributed: 2500000,
        },
    })

    // 5. Create Artifacts
    await prisma.artifact.create({
        data: {
            title: 'Dasavatar Card Set',
            description: 'Rare playing cards from the Malla era depictings ten avatars of Vishnu.',
            material: 'Cloth & Natural Lacquer',
            era: '17th Century',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkDnhQwexA6NKA3HFiYaE338IkITmzuPMVt9svUjxf2b9r7FfI5TRjybEtFkG6f-4rNsvSQ4hjJgDx0UaRcjtJfUnKPLV09tlyDl9tfIBDXszFiBA9-A1JXF5h3HYq9ZmNLJIhy1Cm_LWBNAsoGIIClMAtk0fCCmvj4_kiobtlRB-Ye25lM5d3v3GuU2Fc7KyvkqaGrgnYn4-JRijwGRDRdjconk8Ymt3LbFGMdKaVLACJCRcRYhKF12HpFiEHSuiMMzd-sGkxNVs',
            endangeredLevel: 'Critical'
        }
    })

    // 6. Create Video Stories (Artisan Speaks)
    await prisma.videoStory.create({
        data: {
            title: 'Sculpting History',
            description: 'Bishnu Pal shares his journey of 40 years working with terracotta, from temple restoration to modern art.',
            thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQvw_9b25L8FqA812zyO1bvHzH-UZUyV7eFQI8GWpOoPNLiAoyB41aMwaVrot1EIFc5hy61waSaAz75pvtDVT1EG2BrThn1T_eD79Gwpw2eKYHR63FKp2Qf8UUWxU8YIoQmMdrPEMklvgyQHJwkk1IytDDBef15X5s5CijvFg8P5NfkdROye9rfQhfq3vmeHcaUDmqpTikaOKOoyBUEWsLPYtK9PcXlYgUx2MZjt6e-wm2X3lYvWGyAg9kZvH63trvl82SApCa87E',
            duration: '08:30',
            artisanId: rashid.id,
            tags: '["Terracotta", "Bankura"]',
        }
    })

    await prisma.videoStory.create({
        data: {
            title: 'Threads of Memory',
            description: 'Amina Begum demonstrates the ancient Kantha stitch passed down through generations of women.',
            thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGdNQsXOzJxL6dHkRSDMXavitfMgYfAriG0pR77cZLz-eoLFaeC8YzOrDSE2nm7cMdaDRnoM1hN8nF8YBvkR5HwN_m7m-3EEYAtzZyNw2TRUKaXGgH-SOkuL8qDh4aPVXb9xhNJOQzWPqTATUVYgFfTDF8Hb-n5qW5A9UNmt6t8JHaYPz3XQJJcoKAmPq00tUPVhplUQx8c5qACGpW1r_UwWhVM7M7Vkc9eekCzEN17CGbBt7jZNbkRcIyN7NezNrcQlk9bgge-M',
            duration: '15:10',
            artisanId: rashid.id,
            tags: '["Kantha", "Embroidery"]',
        }
    })

    await prisma.videoStory.create({
        data: {
            title: 'Metal and Fire',
            description: 'Gourab Karmakar reveals the secrets of Dokra metal casting, a 4000-year-old lost-wax technique.',
            thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3FBdCtarR-gplkKZsW6Zi3zHAg8_3OGTEnqM_rRQxAjrHJFuxlEu3RYt6D_XRfr64P15Ad-WlyEgDUX30N10K9Fh_wuwqAegs5VzElr0ApBgqG7uRbSLAzKR0lVXU_Yxvcm8YrKsckB67vS53IUfXp09FG5IEBvpQe_6t0Pp0CMBL1PhKUBfyIzRvd6NixM-LwR5SV-L8UgnawOiwkCgAVBvsPQGB1hCMnimJVi-t-5xpe-e_8yZR5lm9dL_2YFiewCqXeF9FM',
            duration: '14:15',
            artisanId: rashid.id,
            tags: '["Dokra", "Metal Casting"]',
        }
    })

    // 7. Create Design Briefs (Designer Hub)
    await prisma.designBrief.create({
        data: {
            title: 'Modern Kantha Jacket Collection',
            description: 'Looking for skilled embroiderers in Birbhum for a fusion outerwear collection that blends denim with traditional Nakshi Kantha stitching patterns.',
            category: 'Apparel',
            status: 'Open',
            proposals: 6,
        }
    })

    await prisma.designBrief.create({
        data: {
            title: 'Sustainable Jamdani Scarves',
            description: 'Developing a new line of organic cotton Jamdani weaves. Need collaboration on motif scaling and natural dye sourcing.',
            category: 'Textile',
            status: 'In Progress',
            proposals: 3,
        }
    })

    // 8. Create Materials (Designer Hub Material Library)
    await prisma.material.create({
        data: {
            name: 'Royal Red Jamdani',
            type: 'Dhaka Weave',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ758jVzJVt7Vqyh45YO21yccGrTUrl1RwsWdC7sO0n4v50T1qbXi5y1E4I2DDeSOe9b0BQGUkKoTCLe3H3HOutkG7xMXsTwA7XXg6k4dFE-Rdh-IZ5_Cdpm0Agq5k22Olfjv3IBCtYlT54LZJh6C4P-Q0coclAAAIhGihJWbCw3KSrFEvBmo1VL-JMLRwVk0gFNPE_TRJIWrDmgqNCbrcf1tLoqZDzTfuu-6WHcZYe6IdVXsi1ALUkLM-OqJ77-WXaxHuLsQZMoM',
            origin: 'Nadia, West Bengal',
        }
    })

    await prisma.material.create({
        data: {
            name: 'Tussar Silk',
            type: 'Raw Finish',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlAqSPqPEELBYkMX9t4_FBSrrn3dZisb228k_itTTEG7rtVtJbRB4qMBP6C5EgJXVZvc-89nFPrsJ_zVRXDLxON7PqJCZ8fqIBb-QqppMokBKx_cQvsUlcz5f9h75a8hj6wJ-d3gIZofFc1HWJU9ee_uRwDbyqY2n_uzbEJCSf1SbcSZmYMt1igYRiAoGvMDe2Dsxm5wAmBI9fDt6007pmUoKMgHwoYTgWtiheT95HCc576_jeZrJUxE69gPKzGNcsz-n0HkNrXk',
            origin: 'Bhagalpur, Bihar',
        }
    })

    await prisma.material.create({
        data: {
            name: 'Nakshi Kantha',
            type: 'Floral Motif',
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35tZN_wJY6qQyZJTgJSnXie8r9nHgCv48GLRGqVM_wo_cErG58F9gPrYyWTFtMhj1UQfeRv96vzyK72--6AgNSeWPc5kVHbalp47HqEeT7dPj3rPMmNujRo3XNVI_UMUF-0HKnQOY4bMNNWGGHuKjNaaA5zfyEZq7663umw2wI4MGhjAgkpF_ptGKjNem6n-QhWF1tdRUXLweTUQ54aI9C_TQ77I4JBGYG9mWZqnGcFhLrl2_XN2D8uIV-kLnb418AAop3nLOIy4',
            origin: 'Birbhum, West Bengal',
        }
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
