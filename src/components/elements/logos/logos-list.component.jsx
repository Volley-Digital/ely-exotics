import React from 'react';

const LogosList = ({logos}) => (
    <section className="py-10 md:py-16 max-w-screen-xl w-full mx-auto">
        <h2 className="text-center px-8 mb-6 md:hidden font-semibold text-2xl text-primary-default">Scroll through our clients</h2>
        <div className="flex overflow-x-scroll md:overflow-hidden items-center justify-between px-3 md:px-4">
            {logos && logos.map((logo, i) => (
                <img key={i} src={logo} className="mb-0 px-3 md:px-4" />
            ))}
        </div>
    </section>
);

export default LogosList;