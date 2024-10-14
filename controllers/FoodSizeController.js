const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      await prisma.foodSize.create({
        data: {
          name: req.body.name,
          foodTypeId: req.body.foodTypeId,
          moneyAdded: req.body.price,
          remark: req.body.remark,
        },
      });

      return res.send({ message: "success" });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
  list: async (req, res) => {
    try {
      const rows = await prisma.foodSize.findMany({
        orderBy: {
          id: "desc",
        },
        include: {
          FoodType: true,
        },
        where: {
          status: "use",
        },
      });

      return res.send({ results: rows });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
  remove: async (req, res) => {
    try {
      await prisma.foodSize.update({
        data: {
          status: "delete",
        },
        where: {
          id: parseInt(req.params.id),
        },
      });

      return res.send({ message: "success" });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
  update: async (req, res) => {
    try {
      await prisma.foodSize.update({
        data: {
          name: req.body.name,
          remark: req.body.remark,
          foodTypeId: req.body.foodTypeId,
          moneyAdded: req.body.price,
        },
        where: {
          id: req.body.id,
        },
      });

      return res.send({ message: "success" });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },

  filter: async (req, res) => {
    try {
      const rows = await prisma.foodSize.findMany({
        where: {
          foodTypeId: parseInt(req.params.foodTypeId),
          status: "use",
        },
        orderBy: {
          moneyAdded: "asc",
        },
      });

      return res.send({ results: rows });
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  },
};
