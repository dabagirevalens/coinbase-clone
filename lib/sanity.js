import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'xvsciy5s',
    dataset : 'production',
    apiVersion: '2021-10-21',
    token: 'skEjefBe3BB1CsrahznQGL5MmXYlMjhiE6MqRvO6JXBHkN6PKlm73uDlM4xYY9i0RQIci94JLp8ZF2Y3kJemWaeyfQdqp5LI6q6nj32Eas4wKLa68tH9zAOsPW1MaigbvoCe3v6dambFxOW8qYyiYYVDnhpdfLMMxzpi3GSuncmtm1DbLSBs',
    useCdn: false
})