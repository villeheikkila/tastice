import { getUserId } from '../../utils';
import { queryType } from 'nexus';
import { idArg, stringArg } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.field('me', {
            type: 'User',
            resolve: (parent, args, ctx) => {
                const userId = getUserId(ctx);
                return ctx.prisma.user({ id: userId });
            },
        });

        t.list.field('users', {
            type: 'User',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.users({ orderBy: 'createdAt_DESC' });
            },
        });

        t.list.field('products', {
            type: 'Product',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.products({ orderBy: 'createdAt_DESC' });
            },
        });

        t.list.field('friendRequests', {
            type: 'FriendRequest',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.friendRequests();
            },
        });

        t.list.field('categories', {
            type: 'Category',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.categories();
            },
        });

        t.list.field('subCategories', {
            type: 'SubCategory',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.subCategories();
            },
        });

        t.list.field('checkins', {
            type: 'Checkin',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.checkins({ orderBy: 'createdAt_DESC' });
            },
        });

        t.list.field('user', {
            type: 'User',
            args: {
                id: idArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.users({ where: { id: args.id } });
            },
        });

        t.list.field('checkin', {
            type: 'Checkin',
            args: {
                id: idArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.checkins({
                    where: { id: args.id },
                });
            },
        });

        t.list.field('company', {
            type: 'Company',
            args: {
                id: idArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.companies({
                    where: { id: args.id },
                });
            },
        });

        t.list.field('companies', {
            type: 'Company',
            resolve: (parent, args, ctx) => {
                return ctx.prisma.companies();
            },
        });

        t.list.field('product', {
            type: 'Product',
            args: {
                id: idArg(),
            },
            resolve: (_, { id }, ctx) => {
                return ctx.prisma.products({
                    where: { id },
                    orderBy: 'createdAt_DESC',
                });
            },
        });

        t.list.field('searchProducts', {
            type: 'Product',
            args: {
                name: stringArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.products({
                    where: { name_starts_with: args.name },
                    orderBy: 'createdAt_DESC',
                });
            },
        });

        t.list.field('searchCheckins', {
            type: 'Checkin',
            args: {
                name: stringArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.checkins({
                    where: { product: { name_contains: args.name } },
                    orderBy: 'createdAt_DESC',
                });
            },
        });

        t.list.field('searchUsers', {
            type: 'User',
            args: {
                name: stringArg(),
            },
            resolve: (_, args, ctx) => {
                return ctx.prisma.users({
                    where: { firstName_starts_with: args.name },
                });
            },
        });
    },
});
