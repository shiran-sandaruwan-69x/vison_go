import React, {ReactNode} from 'react';

function PageWrapper({children}:{children:ReactNode}) {
    return (

        <div>
            {children}
        </div>
    );
}

export default PageWrapper;