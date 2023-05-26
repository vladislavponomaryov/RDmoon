import {animated, useSpring} from "@react-spring/web";

export const Item = () => {
    const springs = useSpring({
        from: {x: -160},
        to: {x: 0},
    })
    return (<>
        <animated.div
            style={{
                width: '20vw',
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs,
            }}
        />
    </>)
}

// <div className={styles.item}></div>