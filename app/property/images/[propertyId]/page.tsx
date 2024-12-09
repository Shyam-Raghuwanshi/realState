export default async function Page({ params }: { params: Promise<{ propertyId: string }> }) {

    const slug = (await params).propertyId

    return (<>
        you want to see the images of property with id {slug}
    </>)
}