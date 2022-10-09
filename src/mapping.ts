import { NvdiRegistered } from "../generated/SkyGreenContract/SkyGreenContract"
import { DataNvdiRegistered } from "../generated/schema"

export function handleNvdiRegistered(event: NvdiRegistered): void {

  let id = event.params.id.toString()
  let entity = DataNvdiRegistered.load(id)

  if (!entity) entity = new DataNvdiRegistered(id)

  entity.mean = event.params.mean
  entity.std = event.params.std
  entity.max = event.params.max
  entity.min = event.params.min
  entity.uuid = event.params.uuid
  entity.parkName = event.params.parkName

  entity.save()
}




