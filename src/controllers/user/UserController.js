export default class UserController {
  async findAllUsers(req, res) {
    try {
      const users = [
        {
          nome: 'Jane Doe',
          'favorite-game': 'Stardew Valley',
          subscriber: false,
        },
        {
          nome: 'Lucas',
          'game-favorito': 'Stardew Valley',
          subscriber: false,
        },
        {
          nome: 'fabricio hein',
          'favorite-game': 'Stardew Valley',
          subscriber: false,
        },
      ];

      return res.status(201).json(users);
    } catch (error) {
      return res.json({ error });
    }
  }
  async criarUsuario(req, res) {
    try {
      const { id } = req.params;

      const user = [];

      if (!user)
        return res.json({ error: 'Não possivel encotrar esse Usuário' });

      return res.json(user);
    } catch (error) {
      return res.json({ error });
    }
  }

  async findUser(req, res) {
    try {
      const { id } = req.params;

      const user = [];

      if (!user)
        return res.json({ error: 'Não possivel encotrar esse Usuário' });

      return res.json(user);
    } catch (error) {
      return res.json({ error });
    }
  }

  async updateUsuario(req, res) {
    try {
      const { nome, email } = req.body;

      return res.json({ msg: 'Usuario Atualizado' });
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUnique({ where: { id: Number(id) } });

      if (!user)
        return res.json({ error: 'Não possivel encotrar esse Usuário' });

      await prisma.user.delete({ where: { id: Number(id) } });

      return res.json({ message: 'Usuário deletado' });
    } catch (error) {
      return res.json({ error });
    }
  }
}
