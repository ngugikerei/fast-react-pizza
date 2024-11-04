/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import { useEffect } from 'react'
import { updateOrder } from '../../services/apiRestaurant'

export default function UpdateOrder({ order }) {
    const fetcher = useFetcher()

    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button type="primary">Make Priority</Button>
        </fetcher.Form>
    )
}

export async function action({ request, params }) {
    const data = { priority: true }
    await updateOrder(params.orderId, data)

    return null
}
