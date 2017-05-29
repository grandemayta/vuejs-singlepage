'use strict';

import router                             from "configs/routes";


const transitions = router.beforeResolve((to, from, next) => {
    console.log('State info ->', to);
    next();
});

export default transitions;