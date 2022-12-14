// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import events from './events'
import gallery from './gallery'
import achievements from './achievements'
import ignites_events from './ignites_events'
import enovus_events from './enovus_events'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    events,
    gallery,
    achievements,
    ignites_events,
    enovus_events
  ]),
})
