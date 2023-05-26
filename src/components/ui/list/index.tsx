import {animated, useTransition} from '@react-spring/web'
import {useApp} from "../../../hooks/useApp";
import {easings} from "@react-spring/web";
import styles from './style.module.scss'

export const List = () => {
    const {list} = useApp()
    const boxSpeed = 700

    const transition = useTransition(list, {
        from: {
            transform: "translate3d(0%, 0px, 0px)",
            width: "0",
        },
        enter: { width: "20vw",},
        leave: {
            transform: `translate3d(500%, 0px, 0px)`,
            config: {
                duration: boxSpeed * 5,
            }
        },
        config: {
            duration: boxSpeed,
            easing: easings.easeOutQuad,
            bounce: 5
        }
    });

    console.log(list)

    return (
        <div
            className={styles.wrapper}
        >
            {
                transition((styles, item) =>
                    <animated.div
                        style={{ display: "block",float: 'left',position: 'relative',height: "200px", background: 'white', ...styles,  }}
                    >
                        <div style={{position: "absolute", width: '100%', right: 0, top: 0}}>
                            Element
                        </div>
                    </animated.div>
                )
            }
        </div>
    );
}
