'use strict';

import router                             from "configs/router";


const transitions = router.beforeResolve((to, from, next) => {
    console.log('State info ->', to);
    next();
});

export default transitions;