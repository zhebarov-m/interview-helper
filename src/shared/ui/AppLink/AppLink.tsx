import { customClasses } from 'shared/lib/classNames/customClasses';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={customClasses(cls.AppLink, {}, [className!, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
