'use server';

import db from "../../prisma/db";

export async function incrementThumbsUo(post) {

  await db.post.update({
    where: {
      id: post.id
    },
    data: {
      likes: {
        increment: 1
      }
    }
  })
}